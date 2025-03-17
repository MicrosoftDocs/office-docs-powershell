---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlineapplicationinstance
applicable: Microsoft Teams
title: Set-CsOnlineApplicationInstance
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-CsOnlineApplicationInstance

## SYNOPSIS
Updates an application instance in Microsoft Entra ID.

**Note**: The use of this cmdlet for assigning phone numbers in commercial and GCC cloud instances has been deprecated. Use the new [Set-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignment) and [Remove-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csphonenumberassignment) cmdlets instead.

## SYNTAX

```
Set-CsOnlineApplicationInstance [-Identity] <string> [[-OnpremPhoneNumber] <string>] [[-ApplicationId] <guid>] [[-AcsResourceId] <guid>] [[-DisplayName] <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to update an application instance in Microsoft Entra ID.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Set-CsOnlineApplicationInstance -Identity appinstance01@contoso.com -ApplicationId ce933385-9390-45d1-9512-c8d228074e07 -DisplayName "AppInstance01"
```

This example shows updated ApplicationId and DisplayName information for an existing Auto Attendant application instance with Identity "appinstance01@contoso.com".

## PARAMETERS

### -Identity
The URI or ID of the application instance to update.

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

### -OnpremPhoneNumber
**Note**: Using this parameter has been deprecated in commercial and GCC cloud instances. Use the new Set-CsPhoneNumberAssignment cmdlet instead.

Assigns a hybrid (on-premise) telephone number to the application instance.

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

### -AcsResourceId
The ACS Resource ID. The unique identifier assigned to an instance of Azure Communication Services within the Azure cloud infrastructure.

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

[New-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/new-csonlineapplicationinstance)

[Find-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/find-csonlineapplicationinstance)

[Sync-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/sync-csonlineapplicationinstance)
