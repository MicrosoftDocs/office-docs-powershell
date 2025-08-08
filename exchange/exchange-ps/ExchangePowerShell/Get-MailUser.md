---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-mailuser
schema: 2.0.0
title: Get-MailUser
---

# Get-MailUser

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Get-MailUser cmdlet to view mail users and also guest users for Microsoft 365 Groups in cloud environments.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AnrSet
```
Get-MailUser [-Anr <String>]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-IgnoreDefaultScope]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-SharedWithMailUser]
 [-SoftDeletedMailUser]
 [-SortBy <String>]
 [<CommonParameters>]
```

### Identity
```
Get-MailUser [[-Identity] <MailUserIdParameter>]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-IgnoreDefaultScope]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-SharedWithMailUser]
 [-SoftDeletedMailUser]
 [-SortBy <String>]
 [<CommonParameters>]
```

### LOBAppAccount
```
Get-MailUser [-LOBAppAccount]
 [-Filter <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ProgressAction <ActionPreference>]
 [-ResultSize <Unlimited>]
 [-SharedWithMailUser]
 [-SoftDeletedMailUser]
 [-SortBy <String>]
 [<CommonParameters>]
```

### HVEAccount
```
Get-MailUser [-HVEAccount]
 [-Filter <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ResultSize <Unlimited>]
 [-SharedWithMailUser]
 [-SortBy <String>]
 [-SoftDeletedMailUser]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailUser
```

This example returns a summary list of all mail users in the organization.

### Example 2
```powershell
Get-MailUser -Identity Ed | Format-List
```

This example returns detailed information for the mail user named Ed.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Identity parameter specifies the mail user that you want to view. You can use any value that uniquely identifies the mail user. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: MailUserIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -Anr

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

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
Accept pipeline input: false
Accept wildcard characters: False
```

### -Credential

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Credential parameter specifies the username and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: AnrSet, Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: AnrSet, Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -Filter

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Filter parameter uses OPATH syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For more information about the filterable properties in Exchange server and Exchange Online, see [Filterable properties for the Filter parameter](https://learn.microsoft.com/powershell/exchange/filter-properties).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -HVEAccount

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The HVEAccount switch specifies that this mail user account is specifically used for the [High volume email service](https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: HVEAccount
Aliases:

Position: Named
Default value: None
Required: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: AnrSet, Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -LOBAppAccount

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: LOBAppAccount
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -ReadFromDomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. You don't need to specify a value with this switch.

The command: `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest requires the ReadFromDomainController switch. Otherwise, the command might use a global catalog that contains outdated information. Also, you might need to run multiple iterations of the command with the ReadFromDomainController switch to get the information.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type: SwitchParameter
Parameter Sets: AnrSet, Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -SharedWithMailUser

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill SharedWithMailUser Description }}

```yaml
Type: SwitchParameter
Parameter Sets: AnrSet, Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with ` | Format-Table -Auto Property1,Property2,...PropertyX`. to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name
- DisplayName
- Alias

```yaml

Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -SoftDeletedMailUser

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The SoftDeletedMailUser switch specifies whether to include soft-deleted mail users in the results. You don't need to specify a value with this switch.

Soft-deleted mail users are deleted mail users that are still recoverable.

```yaml
Type: SwitchParameter
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
