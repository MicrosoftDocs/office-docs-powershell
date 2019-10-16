---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsOnlineApplicationInstance
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsOnlineApplicationInstance

## SYNOPSIS
Creates an application instance in Azure Active Directory. 

## SYNTAX

```
New-CsOnlineApplicationInstance [-UserPrincipalName] <string> [[-ApplicationId] <guid>] [[-DisplayName] <string>]
    [-Tenant <guid>] [-Force] [-WhatIf] [-Confirm]  [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to create an application instance in Azure Active Directory. This same cmdlet is also run when creating a new resource account using Teams Admin Center.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
New-CsOnlineApplicationInstance -UserPrincipalName appinstance01@contoso.com -ApplicationId ce933385-9390-45d1-9512-c8d228074e07 -DisplayName "AppInstance01"
```

This example creates a new application instance for an Auto Attendant with UserPrincipalName "appinstance01@contoso.com", ApplicationId "ce933385-9390-45d1-9512-c8d228074e07", DisplayName "AppInstance01" for the tenant.

The application ID's that you need to use while creating the application instances are:

Auto Attendant: ce933385-9390-45d1-9512-c8d228074e07
Call Queue: 11cd3e2e-fccb-42ad-ad00-878b93575e07

## PARAMETERS

### -UserPrincipalName
The user principal name. It will be used as the SIP URI too. The user principal name should have an online domain.

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
