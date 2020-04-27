---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlineapplicationendpoint
applicable: Skype for Business Online
title: Get-CsOnlineApplicationEndpoint
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineApplicationEndpoint

## SYNOPSIS
It is used to fetch the application endpoints for a tenant.

## SYNTAX

```
Get-CsOnlineApplicationEndpoint [-Uri] <String> [-PhoneNumber <String>] [-Tenant <Guid>]
 [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to fetch the application endpoints for a tenant.

## EXAMPLES

### Example 1
```
Get-CsOnlineApplicationEndpoint -Uri "sip:sample@domain.com"
```

This example retrieves information about the specified application endpoint.

## PARAMETERS

### -Uri
Sip Uri that identifies the tenant specific endpoint for the application.

```yaml
Type: String
Parameter Sets: (All)
Aliases: SipUri

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumber
The service number assigned to the trusted application endpoint.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-CsOnlineApplicationEndpoint](https://docs.microsoft.com/powershell/module/skype/set-csonlineapplicationendpoint)

[New-CsOnlineApplicationEndpoint](https://docs.microsoft.com/powershell/module/skype/new-csonlineapplicationendpoint)

[Remove-CsOnlineApplicationEndpoint](https://docs.microsoft.com/powershell/module/skype/remove-csonlineapplicationendpoint)

[Set up a Trusted Application Endpoint](https://docs.microsoft.com/skype-sdk/trusted-application-api/docs/trustedapplicationendpoint)
