---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/add-availabilityaddressspace
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Add-AvailabilityAddressSpace
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Add-AvailabilityAddressSpace

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Add-AvailabilityAddressSpace cmdlet to create availability address space objects that are used to share free/busy data across Exchange organizations.

The maximum number off Availability address spaces returned by Active Directory to Exchange is 100. We recommend using 100 or fewer address spaces in order for Availability lookups to work properly.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Add-AvailabilityAddressSpace -AccessMethod <AvailabilityAccessMethod>
 -ForestName <String> [-Confirm] [-Credentials <PSCredential>] [-DomainController <Fqdn>] [-ProxyUrl <Uri>]
 [-UseServiceAccount <Boolean>] [-WhatIf] [-TargetAutodiscoverEpr <Uri>] [<CommonParameters>]
```

## DESCRIPTION
In Exchange Online, you need to run the New-AvailabilityConfig cmdlet before you run the Add-AvailabilityAddressSpace cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod OrgWideFB -Credentials (Get-Credential)
```

This example is useful with an untrusted cross-forest Availability service, or if detailed cross-forest free/busy service isn't desired. Enter a username and password when you're prompted by the command. For an untrusted cross-forest configuration, make sure that the user doesn't have a mailbox.

### Example 2
```powershell
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod PerUserFB -Credentials (Get-Credential)
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest, and the specified account connects to the contoso.com forest. The specified account must be an existing account in the contoso.com forest.

### Example 3
```powershell
Add-AvailabilityAddressSpace -ForestName example.contoso.com -AccessMethod PerUserFB -UseServiceAccount $true
```

This example is useful with a trusted cross-forest Availability service. The contoso.com forest trusts the current forest and uses the service account (typically the local system account or the computer account) to connect to the contoso.com forest. Because the service is trusted, there is no issue with authorization when the current forest tries to retrieve free/busy information from contoso.com.

## PARAMETERS

### -AccessMethod
The AccessMethod parameter specifies how the free/busy data is accessed. Valid values are:

- PerUserFB: Per-user free/busy information can be requested. The free/busy data is accessed in the defined per-user free/busy proxy account or group, or in the All Exchange Servers group. This value requires a trust between the two forests, and requires you to use either the UseServiceAccount parameter or Credentials parameter.

- OrgWideFB: Only default free/busy for each user can be requested. The free/busy data is accessed in the per-user free/busy proxy account or group in the target forest. This value requires you to use either the UseServiceAccount parameter or Credentials parameter.

- OrgWideFBBasic: This value is reserved for internal Microsoft use.

- InternalProxy: The request is proxied to an Exchange in the site that has a later version of Exchange.

- PublicFolder: This value was used to access free/busy data on Exchange Server 2003 servers.

```yaml
Type: AvailabilityAccessMethod
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForestName
The ForestName parameter specifies the SMTP domain name of the target forest for users whose free/busy data must be retrieved. If your users are distributed among multiple SMTP domains in the target forest, run the Add-AvailabilityAddressSpace command once for each SMTP domain.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credentials
The Credentials parameter specifies the username and password that's used to access the Availability services in the target forest.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://docs.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyUrl
This parameter is available only in on-premises Exchange.

The ProxyUrl parameter was used to specify the URL that directed an Exchange 2007 Client Access server to proxy its free/busy requests through an Exchange 2010 or Exchange 2013 Client Access server when requesting federated free/busy data for a user in another organization. When you used this parameter, you needed to set the value of the AccessMethod parameter to InternalProxy.

This parameter required that you created the proper trust relationships and sharing relationships between the Exchange organizations. For more information, see [New-FederationTrust](https://docs.microsoft.com/powershell/module/exchange/new-federationtrust).

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseServiceAccount
This parameter is available only in on-premises Exchange.

The UseServiceAccount parameter specifies whether to use the local Availability service account for authorization. Valid values

- $true: The local Availability service account is used for authorization.

- $false: The local Availability service account isn't used for authorization. You need to use the Credentials parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetAutodiscoverEpr
The TargetAutodiscoverEpr parameter specifies the Autodiscover URL of Exchange Web Services for the external organization, for example, `https://contoso.com/autodiscover/autodiscover.xml`. Exchange uses Autodiscover to automatically detect the correct server endpoint for external requests.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
