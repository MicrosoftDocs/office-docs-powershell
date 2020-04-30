---
external help file: Microsoft.Office.Server.UserProfiles.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/update-spprofilesync
applicable: 
title: Update-SPProfileSync
online version:
schema: 2.0.0
---

# Update-SPProfileSync

## SYNOPSIS
Updates the configuration of the User Profile Synchronization job based on the parameters specified.

## SYNTAX

```
Update-SPProfileSync [[-ExcludeWebApplications] <String>] [[-SynchronizationTiming] <String>]
 [[-SweepTiming] <String>] [[-IgnoreIsActive] <Boolean>] [-AssignmentCollection <SPAssignmentCollection>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Update-SPProfileSync cmdlet updates the configuration of the User Profile Synchronization job based on the parameters specified.

## EXAMPLES

### EXAMPLE 1
```
Update-SPProfileSync -IgnoreIsActive:$false
```

This example updates the User Profile Synchronization job marking it to sync all users irrespective of their activity, without prompting for user confirmation.

### EXAMPLE 2
```
Update-SPProfileSync -SynchronizationTiming "every 15 minutes"
```

This example updates the User Profile Synchronization job marking it to run every 15 minutes, without prompting for user confirmation.

## PARAMETERS

### -ExcludeWebApplications
Comma-delimited list of Web application URLs to exclude from consideration in the synchronization process.

The values specified delete any existing values set.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SynchronizationTiming
Sets the schedule for the main synchronization job.
You can mention the schedule using a text string of SPSchedule format (for example, "every 15 minutes" means the job is scheduled to run every 15 minutes, "daily at 09:00:00" means the job is scheduled to run at 9 AM every day).

The default is once per hour.

You can use the SPSchedule.FromString() string method to pass in the strings, "every 5 minutes" or "weekly xxxxxxx".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SweepTiming
Performs the same tasks as the SynchronizationTiming parameter.
However, the SweepTiming parameter sets the schedule for the "sweep" job.
The sweep job is driven by the SharePoint Foundation change log and is used as a lightweight way to capture new users added.
For example, you might have a fully synchronized site, but then a user is added to the site.
The sweep job ensures that the incremental newly added user gets the User Profile properties replicated quickly.

The default value is every 1 minute.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IgnoreIsActive
Specifies whether to sync only active profiles or all profiles.
User profiles of users who contribute to the site are considered as Active.

The valid values are True or False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
