---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/get-cshybridmediationserver
applicable: Skype for Business Online
title: Get-CsHybridMediationServer
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsHybridMediationServer

## SYNOPSIS
Gets the external FQDN of an Edge server access proxy that serves as a hosting provider to a user.

## SYNTAX

```
Get-CsHybridMediationServer [-Identity] <String> [-Tenant <Guid>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
A user whose name equals to the FQDN parameter will be retrieved.
The HostingProvider property of that user will be returned and renamed as AccessProxyExternalFqdn.
The returned user will act as a mediation server in PSTN Hybrid deployment, whose sip address is sip:{MediationServerFqdn}@{SipDomain} and HostingProvider targets to Edge server access proxy external FQDN.

If the user has licenses assigned, the warning message will be shown as guidance to ask admin remove all the licenses for it or re-create a new user without any license and try again.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```
Get-CsHybridMediationServer -Fqdn MediationServer.Contoso.com
```

This example gets the FQDN of a mediation server access proxy.


## PARAMETERS

### -Identity
Specifies the identity of the hybrid public switched telephone network (PSTN) site.
For example: -Identity "SeattlePSTN".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".
You can find your tenant ID by running this command: Get-CsTenant | Select-Object DisplayName, TenantID If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online, you do not have to include the Tenant parameter.
The tenant ID will be determined by your connection and credentials.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsHybridMediationServer](Set-CsHybridMediationServer.md)
