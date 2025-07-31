---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamseducationassignmentsapppolicy
schema: 2.0.0
title: Get-CsTeamsEducationAssignmentsAppPolicy
---

# Get-CsTeamsEducationAssignmentsAppPolicy

## SYNOPSIS
This cmdlet allows you to retrieve the current values of your Education Assignments App Policy.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsEducationAssignmentsAppPolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsEducationAssignmentsAppPolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore]
 [<CommonParameters>]
```

## DESCRIPTION
This policy is controlled by Global and Teams Service Administrators, and is used to turn on/off
certain features only related to the Assignments Service, which runs for tenants with EDU licenses.
At this time, you can only modify your global policy - this policy type does not support user-level
custom policies.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsEducationAssignmentsAppPolicy
```

Retrieves the policy in your organization

## PARAMETERS

### -Filter
Not applicable - you cannot create custom policies, so will always be retrieving the global policy for your organization.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The only value supported is "Global"

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

### -LocalStore
Internal use only.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
