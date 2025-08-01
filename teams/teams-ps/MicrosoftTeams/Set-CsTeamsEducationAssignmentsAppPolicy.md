---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseducationassignmentsapppolicy
schema: 2.0.0
title: Set-CsTeamsEducationAssignmentsAppPolicy
---

# Set-CsTeamsEducationAssignmentsAppPolicy

## SYNOPSIS

This policy is controlled by Global and Teams Service Administrators, and is used to turn on/off certain features only related to the Assignments Service, which runs for tenants with EDU licenses.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsEducationAssignmentsAppPolicy [-Tenant <System.Guid>] [-ParentDigestEnabledType <String>]
 [-MakeCodeEnabledType <String>] [-TurnItInEnabledType <String>] [-TurnItInApiUrl <String>]
 [-TurnItInApiKey <String>] [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsEducationAssignmentsAppPolicy [-Tenant <System.Guid>] [-ParentDigestEnabledType <String>]
 [-MakeCodeEnabledType <String>] [-TurnItInEnabledType <String>] [-TurnItInApiUrl <String>]
 [-TurnItInApiKey <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This policy is controlled by Global and Teams Service Administrators, and is used to turn on/off certain features only related to the Assignments Service, which runs for tenants with EDU licenses.  This cmdlet allows you to retrieve the current values of your Education Assignments App Policy.  At this time, you can only modify your global policy - this policy type does not support user-level custom policies.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsEducationAssignmentsAppPolicy -TurnItInEnabledType "Enabled"
```

Enables the TurnItIn app for the organization

## PARAMETERS

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

### -Force
Suppress all non-fatal errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The identity of the policy being modified.  The only value supported is "Global", as you cannot create user level policies of this type.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Pass in the policy fetched from Get-CsTeamsEducationAssignmentsAppPolicy
```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MakeCodeEnabledType
Block-based coding activities to introduce computer science concepts.  Possible values are "Enabled" or "Disabled"

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParentDigestEnabledType
Send digest emails to parents/guardians. Possible values are "Enabled" or "Disabled"

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TurnItInApiKey
The api key in order to enable TurnItIn.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TurnItInApiUrl
The api url in order to enable TurnItIn

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TurnItInEnabledType
A service that detects plagiarism in student writing.  Possible values are "Enabled" or "Disabled"

```yaml
Type: String
Parameter Sets: (All)
Aliases:

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
