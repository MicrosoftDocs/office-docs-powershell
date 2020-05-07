---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csonlineapplicationinstance
applicable: Skype for Business Online
title: Set-CsOnlineApplicationInstance
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsOnlineApplicationInstance

## SYNOPSIS
Updates an application instance in Azure Active Directory. 

## SYNTAX

```
Set-CsOnlineApplicationInstance [-Identity] <string> [[-OnpremPhoneNumber] <string>] [[-ApplicationId] <guid>]
    [[-DisplayName] <string>] [-Tenant <guid>] [-Force] [-WhatIf] [-Confirm]  [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to update an application instance in Azure Active Directory. This same cmdlet is also run when creating a new resource account using Teams Admin Center.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Set-CsOnlineApplicationInstance -Identity appinstance01@contoso.com -OnpremPhoneNumber +14250000000 -ApplicationId ce933385-9390-45d1-9512-c8d228074e07 -DisplayName "AppInstance01"
```

This example shows updating OnpremPhoneNumber, ApplicationId, DisplayName information for an existing Auto Attendant application instance with Identity "appinstance01@contoso.com".

The following are the application ID's for each type of application instance types:

Auto Attendant: ce933385-9390-45d1-9512-c8d228074e07
Call Queue: 11cd3e2e-fccb-42ad-ad00-878b93575e07

## PARAMETERS

### -Identity
The URI or ID of the application instance to update.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnpremPhoneNumber
Assigns a hybrid (on-premise) telephone number to the application instance.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationId
The application ID.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
