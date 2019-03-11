---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Set-CsOnlineApplicationInstance
schema: 2.0.0
author: kenwith
ms.author: kenwith
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
This cmdlet is used to update an application instance in Azure Active Directory. 


## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Set-CsOnlineApplicationInstance -Identity appinstance01@contoso.com -OnpremPhoneNumber tel:+14250000000 -ApplicationId d08bb60d-d198-4ee5-80d5-03e000aa4290 -DisplayName "AppInstance01"
```

This example shows updating OnpremPhoneNumber, ApplicationId, DisplayName information for an existing application instance with Identity "appinstance01@contoso.com".

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
