---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsOnlineApplicationInstance
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# New-CsOnlineApplicationInstance

## SYNOPSIS
Creates an application instance in AAD. The application instance will be sync'ed into LyncAD and BVD after it's created.

## SYNTAX

```
New-CsOnlineApplicationInstance [-UserPrincipalName] <string> [[-ApplicationId] <guid>] [[-DisplayName] <string>]
    [-Tenant <guid>] [-Force] [-WhatIf] [-Confirm]  [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to create an application instance in AAD. The application instance will be sync'ed into LyncAD and BVD after it's created.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
New-CsOnlineApplicationInstance -UserPrincipalName appinstance01@contoso.com -ApplicationId 00000000-0000-0000-0000-000000000000 -DisplayName "AppInstance01" -Tenant 00000000-0000-0000-0000-000000000001
```

This example creates a new application instance with UserPrincipalName "appinstance01@contoso.com", ApplicationId "00000000-0000-0000-0000-000000000000", DisplayName "AppInstance01", and Tanant "00000000-0000-0000-0000-000000000001"

## PARAMETERS

### -UserPrincipalName
The user principal name. It will be sync as the SIP URI too.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
