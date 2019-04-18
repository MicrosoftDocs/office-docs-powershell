---
external help file: microsoft.office.project.server.stsadmcommandhandler.dll-help.xml
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Set-SPProjectDatabaseQuota
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Set-SPProjectDatabaseQuota

## SYNOPSIS
Microsoft internal use only.

## SYNTAX

### settings
```
Set-SPProjectDatabaseQuota [-Settings] <ProjectDatabaseQuotaSettings> -Url <Uri>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### options
```
Set-SPProjectDatabaseQuota [-Enabled] -MaxDbSize <Int32> -ReadOnlyLimit <Int32>
 -ReadOnlyWarningThreshold <Int32> -Url <Uri> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
Microsoft internal use only.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at https://go.microsoft.com/fwlink/p/?LinkId=251833 (https://go.microsoft.com/fwlink/p/?LinkId=251833).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
 {{ Add example code here }}
```

{{ Add example description here }}


## PARAMETERS

### -Settings
Microsoft internal use only.

```yaml
Type: ProjectDatabaseQuotaSettings
Parameter Sets: settings
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Microsoft internal use only.

```yaml
Type: SwitchParameter
Parameter Sets: options
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDbSize
Microsoft internal use only.

```yaml
Type: Int32
Parameter Sets: options
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadOnlyLimit
Microsoft internal use only.

```yaml
Type: Int32
Parameter Sets: options
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadOnlyWarningThreshold
Microsoft internal use only.

```yaml
Type: Int32
Parameter Sets: options
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
Microsoft internal use only.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Microsoft internal use only.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
