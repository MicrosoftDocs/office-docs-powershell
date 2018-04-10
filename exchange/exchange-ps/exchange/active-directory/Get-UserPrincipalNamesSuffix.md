---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-UserPrincipalNamesSuffix
schema: 2.0.0
---

# Get-UserPrincipalNamesSuffix

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-UserPrincipalNamesSuffix cmdlet to view the user principal name (UPN) suffixes in the Active Directory forest. The UPN suffixes are created in Active Directory Domains and Trusts.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UserPrincipalNamesSuffix [-OrganizationalUnit <ExtendedOrganizationalUnitIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
UPN suffixes assigned to an organizational unit are stored in the upnSuffixes attribute in the Organizational Unit object.

The default UPN is contained in the Canonical Name attribute on the Partitions container object in the configuration naming context. The default UPN suffix identifies the domain in which the user account is contained. When you create a user account in Active Directory, the default UPN suffix is the DNS name of the first domain in your domain tree.

If you create user accounts by using Active Directory Users and Computers, every user must have a UPN.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-UserPrincipalNamesSuffix
```

This example returns all UPN suffixes for the Active Directory forest.

## PARAMETERS

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/7d7ce148-4924-49e9-a57d-06bdc2d9f365.aspx)
