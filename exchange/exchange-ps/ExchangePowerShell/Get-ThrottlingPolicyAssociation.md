---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-throttlingpolicyassociation
schema: 2.0.0
title: Get-ThrottlingPolicyAssociation
---

# Get-ThrottlingPolicyAssociation

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ThrottlingPolicyAssociation cmdlet to view existing throttling policy associations in your organization. Throttling policies can be associated with mailboxes, user accounts, mail contacts, mail users, and Exchange server computer accounts.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AnrSet
```
Get-ThrottlingPolicyAssociation [-Anr <String>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [-SortBy <String>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [<CommonParameters>]
```

### Identity
```
Get-ThrottlingPolicyAssociation [[-Identity] <ThrottlingPolicyAssociationIdParameter>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [-SortBy <String>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
For more information about how to control the resources consumed by individual users, see [User workload management in Exchange Server](https://learn.microsoft.com/Exchange/server-health/workload-management).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ThrottlingPolicyAssociation -ResultSize unlimited
```

This example retrieves a summary list of all throttling policy associations in your organization.

### Example 2
```powershell
Get-ThrottlingPolicyAssociation -Anr Chr -DomainController DC01
```

In Exchange Server 2010 and 2013, this example returns all the mailboxes that resolve from the ambiguous name resolution search on the string "Chr" that are in the domain DC01. This example returns mailboxes for users such as Chris Ashton, Christian Hess, and Christa Geller.

### Example 3
```powershell
Get-ThrottlingPolicyAssociation -Identity "Courtney Sweet" | Format-List
```

This example returns detailed information for the throttling policy association named Courtney Sweet.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the throttling policy association that you want to view. You can use any value that uniquely identifies the throttling policy association. For example:

- Name
- Distinguished name (DN)
- GUID For example:
- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: ThrottlingPolicyAssociationIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Anr

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)
- DisplayName
- FirstName
- LastName
- Alias

```yaml
Type: String
Parameter Sets: AnrSet
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

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

### -ThrottlingPolicy

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The ThrottlingPolicy parameter filters the results by throttling policy. You can use any value that uniquely identifies the throttling policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: (All)
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
