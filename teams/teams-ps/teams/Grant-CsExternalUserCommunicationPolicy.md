---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/grant-csexternalusercommunicationpolicy
applicable: Microsoft Teams
title: Grant-CsExternalUserCommunicationPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Grant-CsExternalUserCommunicationPolicy

## SYNOPSIS
Provide the topic introduction here.

## SYNTAX

### Identity (Default)
```
Grant-CsExternalUserCommunicationPolicy [[-Identity] <UserIdParameter>] [-PolicyName] <String>
 [-Tenant <Guid>] [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsExternalUserCommunicationPolicy [-PolicyName] <String> [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-PassThru] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Provide the detailed description here.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Insert example commands for example 1.
```

Insert descriptive text for example 1.

## PARAMETERS

### -PolicyName
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
PARAMVALUE: Fqdn

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
PARAMVALUE: UserIdParameter

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
