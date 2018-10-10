---
external help file: 
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Set-SPProjectQueueSettings
schema: 2.0.0
---

# Set-SPProjectQueueSettings

## SYNOPSIS
Sets the value of one or multiple Project Server Queue settings for a specific Project Server service application.

## SYNTAX

```
Set-SPProjectQueueSettings [-ServiceApplication <PsiServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-CleanupNonSuccessAgeLimit <Int32>]
 [-CleanupSuccessAgeLimit <Int32>] [-MaxConnections <Int32>] [-MaxDegreeOfConcurrency <Int32>]
 [-MsgRetryInterval <Int32>] [-MsgRetryLimit <Int32>] [-PeriodicTasksInterval <Int32>] [-QueueTimeout <Int32>]
 [-SqlCommandTimeout <Int32>] [-SqlRetryInterval <Int32>] [-SqlRetryLimit <Int32>] [-NetTcpPort <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
Sets the value of one or multiple Project Server Queue settings for a specific Project Server service application.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
PS C:\>Set-SPProjectQueueSettings -ServiceApplication "Project Service Application" -MaxDegreeOfConcurrency 6
```

This example sets a maximum of 6 for the number of jobs that can be processed at one time by the specified service application.


## PARAMETERS

### -ServiceApplication
Specifies the Project Server service application to target.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Project Server service application (for example, ProjectServiceApp1); or an instance of a valid PsiServiceApplication object.

```yaml
Type: PsiServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: sa
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CleanupNonSuccessAgeLimit
This setting determines the age threshold at which any job in a completed, non-successful state (example: Failed But Not Blocking Correlation) can be purged when the Queue Cleanup job runs.
The age of each job is determined by the completed date and time.
For example, if a job was cancelled at 2/1/2007 10:41 p.m.
and the Queue Cleanup job runs at 2/2/2007 11:55 p.m., then the job will not be purged (assuming the Cleanup Age Limit For Non-successful Jobs was 7 days).
Because the number of completed, non-successful jobs is usually not high, the Cleanup Age Limit For Non-successful Jobs setting is usually set to a high value of 168 (7 days).

Minimum: 1;Maximum: 100000;Default: 168 (7 days)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CleanupSuccessAgeLimit
This setting determines the age threshold at which successful jobs can be purged when the Queue Cleanup job runs.
The age of each job is determined by the completed date and time.
For example, if a job succeeded at 2/1/2007 10:41 p.m.
and the Queue Cleanup job runs at 2/2/2007 11:55 p.m., then the job will be purged (assuming the Cleanup Age Limit For Successful Jobs was 1 day).
Since the number of successful jobs is usually high, the Cleanup Age Limit For Successful Jobs setting is usually set to a low value of 24 (1 day).

Minimum: 1;Maximum: 100000;Default: 24 (1 day)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConnections
Maximum number of Queue connections allowed to be pending dispatch on the server.

Default: 10

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDegreeOfConcurrency
The Queue is multi-threaded, which enables multiple jobs to be processed at the same time.
This setting limits the degree of concurrency of the queue.
Note that this setting is per Project Server service application.

Minimum: 1;Maximum: 10;Default: 4

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsgRetryInterval
If job processing fails due to transient issues (like a SQL Deadlock), instead of failing the job, the Queue will wait for the Retry Interval to elapse and retry the job.

Minimum: 0 (immediately retry);Maximum: 300000 (5 minutes);Default: 1000 (1 second)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsgRetryLimit
If job processing fails due to transient issues (like a SQL Deadlock), instead of failing the job, the Queue will retry the job.
The number of retries is bound by the Retry Limit.

Minimum: 0 (no retries);Maximum: 100;Default: 5

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PeriodicTasksInterval
There are a number of bookkeeping tasks executed by the Queue System.
Some examples are awakening jobs in 'Sleeping' state, updating the heartbeat timestamp, checking whether Queue Cleanup needs to be executed and so on.
This setting controls the time interval at which these tasks run.

Minimum: 500 (1/2 second);Maximum: 300000 (5 minutes);Default: 10000 (10 second)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueueTimeout
The Queue System has a failover recovery feature.
If the farm contains multiple servers running the Project Server Application Service and the Queue Service fails on one server, jobs are automatically redistributed to other servers on which the Queue Service is online.
A Queue Service is considered to have timed out if it cannot be accessed from the Queue health timer job for more than the 'Queue Timeout' interval.

Minimum: 5 minutes;Maximum: 60 minutes;Default: 15 minutes

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlCommandTimeout
The Queue makes SQL calls for retrieving and executing jobs.
This setting controls the timeout value for all such calls.
If any job fails due to a SQL Timeout error, administrators can increase this setting and retry the job.

Minimum: 30 seconds;Maximum: 86400 (1 day);Default: 1800 (30 minutes)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlRetryInterval
If the Queue fails to connect to a Project Web App database due to a transient SQL problem (like a SQL Deadlock), the Queue will wait for the SQL Retry Interval to elapse and retry the query.

Minimum: 0 (immediately retry);Maximum: 60000 (1 minute);Default: 1000 (1 second)

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlRetryLimit
If the Queue fails to connect to a Project Web App database due to a transient SQL problem (like a SQL Deadlock), the Queue will retry the query after the SQL Retry Interval has elapsed.
The number of retries is bound by the SQL Retry Limit.

Minimum: 0 (no retries)Maximum: 100Default: 5

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetTcpPort
Sets the TCP port the Project Queue service uses.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
