---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.ExoPowershellGalleryModule.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-connectioninformation
schema: 2.0.0
title: Get-ConnectionInformation
---

# Get-ConnectionInformation

## SYNOPSIS
This cmdlet is available in the Exchange Online PowerShell module version 3.0.0 or later. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-ConnectionInformation cmdlet to get information about all REST-based connections in the current PowerShell instance with Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default (Default)
```
Get-ConnectionInformation [<CommonParameters>]
```

### ConnectionId
```
Get-ConnectionInformation -ConnectionId <String[]> [<CommonParameters>]
```

### ModulePrefix
```
Get-ConnectionInformation -ModulePrefix <String[]> [<CommonParameters>]
```

## DESCRIPTION
The Get-ConnectionInformation cmdlet returns the information about all active REST-based connections with Exchange Online in the current PowerShell instance. This cmdlet is equivalent to the Get-PSSession cmdlet that's used with remote PowerShell sessions.

The output of the cmdlet contains the following properties:

- ConnectionId: A unique GUID value for the connection. For example, 8b632b3a-a2e2-8ff3-adcd-6d119d07694b.
- State: For example, Connected.
- Id: An integer that identifies the session in the PowerShell window. The first connection is 1, the second is 2, etc.
- Name: A unique name that's based on the PowerShell environment and Id value. For example, ExchangeOnline_1 for Exchange Online PowerShell or ExchangeOnlineProtection_1 for Security & Compliance PowerShell.
- UserPrincipalName: The account that was used to connect. For example, `laura@contoso.onmicrosoft.com`.
- ConnectionUri: The connection endpoint that was used. For example, `https://outlook.office365.com` for Exchange Online PowerShell or `https://nam12b.ps.compliance.protection.outlook.com` for Security & Compliance PowerShell.
- AzureAdAuthorizationEndpointUri : The Microsoft Entra authorization endpoint for the connection. For example, `https://login.microsoftonline.com/organizations` for Exchange Online PowerShell or `https://login.microsoftonline.com/organizations` for Security & Compliance PowerShell.
- TokenExpiryTimeUTC: When the connection token expires. For example, 9/30/2023 6:42:24 PM +00:00.
- CertificateAuthentication: Whether certificate based authentication (also known as CBA or app-only authentication) was used to connect. Values are True or False.
- ModuleName: The filename and path of the temporary data for the session. For example, C:\Users\laura\AppData\Local\Temp\tmpEXO_a54z135k.qgv
- ModulePrefix: The value specified using the Prefix parameter in the Connect-ExchangeOnline or Connect-IPPSSession command.
- Organization: The value specified using the Organization parameter in the Connect-ExchangeOnline or Connect-IPPSSession command for CBA or managed identity connections.
- DelegatedOrganization: The value specified using the DelegatedOrganization parameter in the Connect-ExchangeOnline or Connect-IPPSSession command.
- AppId: The value specified using the AppId parameter in the Connect-ExchangeOnline or Connect-IPPSSession command for CBA connections.
- PageSize: The default maximum number of entries per page in the connection. The default value is 1000, or you can use the PageSize parameter in the Connect-ExchangeOnline command to specify a lower number. Individual cmdlets might also have a PageSize parameter.
- TenantID: The tenant ID GUID value. For example, 3750b40b-a68b-4632-9fb3-5b1aff664079.
- TokenStatus: For example, Active.
- ConnectionUsedForInbuiltCmdlets
- IsEopSession: For Exchange Online PowerShell connections, the value is False. For Security & Compliance PowerShell connections, the value is True.

## EXAMPLES

### Example 1
```powershell
Get-ConnectionInformation
```

This example returns a list of all active REST-based connections with Exchange Online in the current PowerShell instance.

### Example 2
```powershell
Get-ConnectionInformation -ConnectionId 1a9e45e8-e7ec-498f-9ac3-0504e987fa85
```

This example returns the active REST-based connection with the specified ConnectionId value.

### Example 3
```powershell
Get-ConnectionInformation -ModulePrefix Contoso,Fabrikam
```

This example returns a list of active REST-based connections that are using the specified prefix values.

## PARAMETERS

### -ConnectionId

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.2.0 or later.

The ConnectionId parameter filters the connections by ConnectionId. ConnectionId is a GUID value in the output of the Get-ConnectionInformation cmdlet that uniquely identifies a connection, even if you have multiple connections open. You can specify multiple ConnectionId values separated by commas.

Don't use this parameter with the ModulePrefix parameter.

```yaml
Type: String[]
Parameter Sets: ConnectionId
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModulePrefix

> Applicable: Exchange Online

**Note**: This parameter is available in module version 3.2.0 or later.

The ModulePrefix parameter filters the connections by ModulePrefix. When you use the Prefix parameter with the Connect-ExchangeOnline cmdlet, the specified text is added to the names of all Exchange Online cmdlets (for example, Get-InboundConnector becomes Get-ContosoInboundConnector). The ModulePrefix value is visible in the output of the Get-ConnectionInformation cmdlet. You can specify multiple ModulePrefix values separated by commas.

This parameter is meaningful only for connections that were created with the Prefix parameter.

Don't use this parameter with the ConnectionId parameter.

```yaml
Type: String[]
Parameter Sets: ModulePrefix
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
