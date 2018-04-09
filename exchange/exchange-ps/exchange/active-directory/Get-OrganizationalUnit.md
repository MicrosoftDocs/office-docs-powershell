---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-OrganizationalUnit
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-OrganizationalUnit

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-OrganizationalUnit cmdlet to view a list of organizational units (OUs) that exist in your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Get-OrganizationalUnit [[-Identity] <ExtendedOrganizationalUnitIdParameter>] [-DomainController <Fqdn>]
 [-IncludeContainers] [-SingleNodeOnly] [<CommonParameters>]
```

### Set1
```
Get-OrganizationalUnit [[-Identity] <ExtendedOrganizationalUnitIdParameter>] [-DomainController <Fqdn>]
 [-IncludeContainers] [-ResultSize <Unlimited>] [-SingleNodeOnly] [<CommonParameters>]
```

### Set2
```
Get-OrganizationalUnit [-DomainController <Fqdn>] [-IncludeContainers] [-ResultSize <Unlimited>]
 [-SearchText <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-OrganizationalUnit cmdlet is used by the Exchange admin center to populate fields that display OU information.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-OrganizationalUnit "North America" -SingleNodeOnly | Format-Table Name, DistinguishedName
```

This example retrieves a list of the first level child OUs beneath the North America OU and formats the output so that only the Name and DistinguishedName properties are displayed.

For more information about pipelining and the Format-Table cmdlet, see Pipelining (https://technet.microsoft.com/library/aa998260.aspx) and Working with command output (https://technet.microsoft.com/library/bb123533.aspx).

### -------------------------- Example 2 --------------------------
```
Get-OrganizationalUnit -SearchText "Executives" | Format-Table Name, DistinguishedName
```

This example retrieves a list of OUs that match the text string "Executives" and formats the output so that only the Name and DistinguishedName properties are displayed.

For more information about pipelining and the Format-Table cmdlet, see Pipelining (https://technet.microsoft.com/library/aa998260.aspx) and Working with command output (https://technet.microsoft.com/library/bb123533.aspx).

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

### -Identity
The Identity parameter specifies the OU or domain that you want to view. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

You can use this parameter with the SearchText parameter.

```yaml
Type: ExtendedOrganizationalUnitIdParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeContainers
The IncludeContainers switch instructs the command to return containers in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SingleNodeOnly
The SingleNodeOnly switch instructs the command to return only the first level child OUs beneath the OU specified in the Identity parameter. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All), Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchText
The SearchText parameter enables you to search the names of all OUs in your organization for the specified string. Only the OUs that match the string you specify are returned. If the string you specify contains spaces, enclose it in quotation marks (").

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/ec2d1cc9-863f-47f1-b235-57f2a2835437.aspx)
