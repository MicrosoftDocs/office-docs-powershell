---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlineapplicationinstance
applicable: Microsoft Teams
title: New-CsOnlineApplicationInstance
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# New-CsOnlineApplicationInstance

## SYNOPSIS
Creates an application instance in Microsoft Entra ID.

## SYNTAX

```
New-CsOnlineApplicationInstance [-UserPrincipalName] <string> [[-ApplicationId] <guid>] [[-DisplayName] <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to create an application instance in Microsoft Entra ID. This same cmdlet is also run when creating a new resource account using Teams Admin Center.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
New-CsOnlineApplicationInstance -UserPrincipalName appinstance01@contoso.com -ApplicationId ce933385-9390-45d1-9512-c8d228074e07 -DisplayName "AppInstance01"
```

This example creates a new application instance for an Auto Attendant with UserPrincipalName "appinstance01@contoso.com", ApplicationId "ce933385-9390-45d1-9512-c8d228074e07", DisplayName "AppInstance01" for the tenant.

## PARAMETERS

### -UserPrincipalName
The user principal name. It will be used as the SIP URI too. The user principal name should have an online domain.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationId
The application ID. The Microsoft application Auto Attendant has the ApplicationId ce933385-9390-45d1-9512-c8d228074e07 and the Microsoft application Call Queue has the ApplicationId 11cd3e2e-fccb-42ad-ad00-878b93575e07. Third-party applications available in a tenant will use other ApplicationId's.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The display name.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
This switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If it isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/get-csonlineapplicationinstance)

[Set-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/set-csonlineapplicationinstance)

[Find-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/find-csonlineapplicationinstance)

[Sync-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/sync-csonlineapplicationinstance)
