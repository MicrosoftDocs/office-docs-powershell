---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
title: Get-SecurityPrincipal
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || o365scc-ps || eop-ps"
---

# Get-SecurityPrincipal

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-SecurityPrincipal cmdlet to return a list of security principals. Security principals are entities, such as users or security groups, which can be assigned permissions and user rights.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SecurityPrincipal [[-Identity] <ExtendedSecurityPrincipalIdParameter>] [-DomainController <Fqdn>]
 [-Filter <String>] [-IncludeDomainLocalFrom <SmtpDomain>] 
 [-OrganizationalUnit <ExtendedOrganizationalUnitIdParameter>] [-ResultSize <Unlimited>] [-RoleGroupAssignable]
 [-Types <MultiValuedProperty>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SecurityPrincipal cmdlet is used by the Exchange admin center to populate fields that display recipient information.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SecurityPrincipal -OrganizationalUnit OU=People,DC=Contoso,DC=com
```

This example retrieves security principals from the People OU.

### -------------------------- Example 2 --------------------------
```
Get-SecurityPrincipal -Filter {Department -eq "Legal"}
```

This example retrieves security principals from the Legal department by using the Filter parameter. Only security principals matching the filter condition are retrieved.

### -------------------------- Example 3 --------------------------
```
Get-SecurityPrincipal -Identity Administrator
```

This example retrieves a single security principal explicitly specified by using the Identity parameter.

### -------------------------- Example 4 --------------------------
```
Get-SecurityPrincipal -Types WellKnownSecurityPrincipal | Format-Table Name,SID -AutoSize
```

This example retrieves well-known security principals and displays only the Name and SID properties in the results.

## PARAMETERS

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax {\<Property\> -\<Comparison operator\> '\<Value\>'}.

- \<Property\> is a filterable property.

- -\<Comparison Operator\> is an OPATH comparison operator. For example -eq for equals and -like for string comparison. For more information about comparison operators, see about\_Comparison\_Operators (https://go.microsoft.com/fwlink/p/?LinkId=620712).

- \<Value\> is the property value. Text values with or without spaces need to be enclosed in quotation marks ('\<Value\>'). Don't use quotation marks with integers or the system values $true, $false, or $null.

You can chain multiple search criteria together using the logical operators -and and -or. For example, {\<Criteria1\>) -and \<Criteria2\>} or {(\<Criteria1\> -and \<Criteria2\>) -or \<Criteria3\>}.

You can filter by the following properties:

- AdminDisplayName

- DisplayName

- DistinguishedName

- ExchangeVersion

- Guid

- Id

- Name

- ObjectCategory

- ObjectClass

- RecipientType

- RecipientTypeDetails

- Sid

- WhenChanged

- WhenChangedUTC

- WhenCreated

- WhenCreatedUTC

For more information, see Filterable properties for the -Filter parameter (https://technet.microsoft.com/library/bb738155.aspx).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the security principal. When the security principal is explicitly specified by using this parameter, no additional security principals are returned.

```yaml
Type: ExtendedSecurityPrincipalIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeDomainLocalFrom
This parameter is available only in on-premises Exchange.

The IncludeDomainLocalFrom parameter specifies whether to return domain local groups from the FQDN of the specified Active Directory domain (for example, contoso.com) in the results.

Don't use this parameter with the Filter or Identity parameters.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

```yaml
Type: ExtendedOrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleGroupAssignable
The RoleGroupAssignable switch filters security principals by returning only objects that can be assigned to an RBAC role group. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Types
The Types parameter filters the results by object type. Valid values are:

- Computer

- GlobalSecurityGroup

- Group

- UniversalSecurityGroup

- User

- WellknownSecurityPrincipal

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/98d70e10-6972-4317-88d0-59f99845cf15.aspx)
