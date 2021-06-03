SELECT sqltext.TEXT,
req.session_id,
req.status,
req.command,
req.cpu_time,
req.total_elapsed_time
FROM sys.dm_exec_requests req
CROSS APPLY sys.dm_exec_sql_text(sql_handle) AS sqltext

SELECT  wt.session_id, 
    ot.task_state, 
    wt.wait_type, 
    wt.wait_duration_ms, 
    wt.blocking_session_id, 
    wt.resource_description, 
    es.[host_name], 
    es.[program_name] 
FROM  sys.dm_os_waiting_tasks  wt  
INNER  JOIN sys.dm_os_tasks ot ON ot.task_address = wt.waiting_task_address 
INNER JOIN sys.dm_exec_sessions es ON es.session_id = wt.session_id 
WHERE es.is_user_process =  1 