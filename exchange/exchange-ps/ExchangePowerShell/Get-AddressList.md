---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-addresslist
schema: 2.0.0
title: Get-AddressList
---

# Get-AddressList

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-AddressList cmdlet to view address lists.

In Exchange Online, this cmdlet is available only in the Address Lists role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Address Lists role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Container
```
Get-AddressList -Container <AddressListIdParameter>
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Identity
```
Get-AddressList [[-Identity] <AddressListIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### SearchSet
```
Get-AddressList [-SearchText <String>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
You can pipe the output from the Get-AddressList cmdlet to the Remove-AddressList, Set-AddressList, Update-AddressList and Move-AddressList cmdlets instead of using the Identity parameter with each of those cmdlets.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AddressList
```

This example returns a summary list of all the address lists.

### Example 2
```powershell
Get-AddressList -Identity "All Users\Sales\building4" | Format-List
```

This example returns detailed information for the address list named building4that's located under the All Users\\Sales\\ address list.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the address list that you want to view. You can use any value that uniquely identifies the address list. For example:

- Name
- Distinguished name (DN)
- GUID
- Path: `"\AddressListName"` or `"\ContainerName\AddressListName"` (for example, `"\All Users"` or `"\All Contacts\Marketing"`)

You can't use this parameter with the Container or SearchText parameters.

```yaml
Type: AddressListIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Container

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Container parameter filters the results based on the location of the address list. Only address lists under the specified path are returned. Valid input for this parameter is the root "\\" (also known as All Address Lists) or an existing address list. You can use any value that uniquely identifies the address list. For example:

- Name
- Distinguished name (DN)
- GUID
- Path: `"\AddressListName"` or `"\ContainerName\AddressListName"` (for example, `"\All Users"` or `"\All Contacts\Marketing"`)

You can't use this parameter with the Identity or SearchText parameters.

```yaml
Type: AddressListIdParameter
Parameter Sets: Container
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchText

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The SearchText parameter filters the results based on the name and display name of the address list. Only address lists whose names or display names that contain the specified text string are returned. If the value contains spaces, enclose the value in quotation marks (").

You can't use this parameter with the Container or Identity parameters.

```yaml
Type: String
Parameter Sets: SearchSet
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
