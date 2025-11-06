---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csautoattendantdialscope
schema: 2.0.0
title: New-CsAutoAttendantDialScope
---

# New-CsAutoAttendantDialScope

## SYNOPSIS
Use New-CsAutoAttendantDialScope cmdlet to create dial-scopes for use with Auto Attendant (AA) service.

## SYNTAX

```
New-CsAutoAttendantDialScope -GroupScope -GroupIds <List> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet creates a new dial-scope to be used with Auto Attendant (AA) service. AAs use dial-scopes to restrict the scope of call transfers that can be made through directory lookup feature.

**NOTE**: The returned dial-scope model composes a member for the underlying type/implementation, e.g. in case of the group-based dial scope, in order to modify its Group IDs, you can access them through `DialScope.GroupScope.GroupIds`.

## EXAMPLES

### Example 1
```
$groupIds = @("00000000-0000-0000-0000-000000000000")
$dialScope = New-CsAutoAttendantDialScope -GroupScope -GroupIds $groupIds
```

In Example 1, the New-CsAutoAttendantDialScope cmdlet is used to create a dial-scope with a group whose id is 00000000-0000-0000-0000-000000000000.

### Example 2
```
$groupIds = Find-CsGroup -SearchQuery "Contoso Sales" | % { $_.Id }
$dialScope = New-CsAutoAttendantDialScope -GroupScope -GroupIds $groupIds
```

In Example 2, we use the Find-CsGroup cmdlet to find groups with name "Contoso Sales", and then use the identities of those groups to create an auto attendant dial scope using the New-CsAutoAttendantDialScope cmdlet.

## PARAMETERS

### -GroupIds

> Applicable: Microsoft Teams

Refers to the IDs of the groups that are to be included in the dial-scope.

Group IDs can be obtained by using the Find-CsGroup cmdlet.

```yaml
Type: System.Collections.Generic.List
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupScope

> Applicable: Microsoft Teams

Indicates that a dial-scope based on groups (distribution lists, security groups) is to be created.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Microsoft Teams

This parameter is reserved for Microsoft internal use only.

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

### Microsoft.Rtc.Management.OAA.Models.DialScope

## NOTES

## RELATED LINKS

[Find-CsGroup](https://learn.microsoft.com/powershell/module/microsoftteams/find-csgroup)
