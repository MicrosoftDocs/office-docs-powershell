---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPContentDeploymentJob
schema: 2.0.0
---

# New-SPContentDeploymentJob

## SYNOPSIS
Creates a content deployment job.

## SYNTAX

```
New-SPContentDeploymentJob -Name <String> -SPContentDeploymentPath <SPContentDeploymentPathPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Description <String>]
 [-EmailAddresses <String[]>] [-EmailNotifications <ContentDeploymentNotificationSettings>]
 [-HostingSupportEnabled] [-IncrementalEnabled] [-Schedule <String>] [-ScheduleEnabled]
 [-Scope <SPWebPipeBind[]>] [-SqlSnapshotSetting <ContentDeploymentSqlSnapshotSetting>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The New-SPContentDeploymentJob cmdlet adds a new content deployment job to a farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
C:\PS>Get-SPContentDeploymentPath "Path 1" | New-SPContentDeploymentJob -Name "Deployment Job" -SPContentDeploymentPath $_ -IncrementalEnabled:$true -ScheduleEnabled:$false
```

This example creates a new content deployment job called Deployment Job by using the deployment path Path 1.
The job is configured to be an incremental job with no schedule.

## PARAMETERS

### -Name
Specifies the name of the new content deployment job.

The type must be a valid name of a content deployment job; for example, DeployJob1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SPContentDeploymentPath
Specifies the deployment path to associate with the new deployment job.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a content deployment job (for example; DeployJob1); or an instance of a valid SPContentDeploymentJob object.

```yaml
Type: SPContentDeploymentPathPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies the description for the content deployment job.
The name can be a maximum of 4096 alphanumeric characters.

The type must be a valid string.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses
Specifies the e-mail addresses of individuals who receive notification e-mails about this ContentDeploymentJob object.

The type must be a list of valid e-mail addresses.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailNotifications
Specifies how e-mail notifications are sent about this ContentDeploymentJob object.

The type must be one of the following:

-Never specifies that e-mail notifications will not be sent when a job succeeds or fails.

- SendEmailOnSuccess specifies that e-mail notifications will be sent if a content deployment job succeeds.
- SendEmailOnFailure specifies that e-mail notifications will be sent if a content deployment job fails.
- SendEmailOnAlways specifies that e-mail notifications will be sent when a job succeeds or fails.

```yaml
Type: ContentDeploymentNotificationSettings
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostingSupportEnabled
Enables special hosting- behavior.
The default value is False.

Normally, a content deployment job is enabled or disabled by using the SharePoint Central Administration Web site.
However, in the case of hosting, the tenant administrator does not have permissions to access the Central Administration page to configure jobs.
Therefore, when the HostingSupportEnabled parameter is set to True, the hoster creates the job, so that tenants can enable or disable their deployment jobs from their tenant administration site.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncrementalEnabled
Specifies that only incremental changes are deployed to the destination site collection.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Schedule
Sets the schedule for the deployment job.

The type must be a valid SPSchedule object.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScheduleEnabled
Specifies to enable the schedule for the deployment job.
If the schedule is not enabled the job can be run only manually.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope
Sets the scope of the deployment job.
SPSites passed in must exist in the current path of the source site collection.
The default scope is the entire site collection.
Valid values include an SPWeb object or an array of SPWeb objects.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SharePoint Foundation Web site (for example, MySPSite1); or an instance of a valid SPWeb object.

```yaml
Type: SPWebPipeBind[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlSnapshotSetting
Creates a database snapshot of the source SharePoint Foundation content database to use for the export process.

The type must be one of the following values:

- None
- CreateNew

The CreateNew value requires thatSQL Server Enterprise Edition be installed.

```yaml
Type: ContentDeploymentSqlSnapshotSetting
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

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

