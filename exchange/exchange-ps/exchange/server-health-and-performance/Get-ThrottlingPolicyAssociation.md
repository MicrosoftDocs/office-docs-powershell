---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-ThrottlingPolicyAssociation
schema: 2.0.0
---

# Get-ThrottlingPolicyAssociation

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ThrottlingPolicyAssociation cmdlet to view existing throttling policy associations in your organization. Throttling policies can be associated with mailboxes, user accounts, mail contacts, mail users, and Exchange server computer accounts.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-ThrottlingPolicyAssociation [-Anr <String>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-IgnoreDefaultScope] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController] [-ResultSize <Unlimited>]
 [-SortBy <String>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [<CommonParameters>]
```

### Set1
```
Get-ThrottlingPolicyAssociation [[-Identity] <ThrottlingPolicyAssociationIdParameter>]
 [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController] [-ResultSize <Unlimited>] [-SortBy <String>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
For more information about how to control the resources consumed by individual users, see User workload management (https://technet.microsoft.com/library/jj150503.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-ThrottlingPolicyAssociation -OrganizationalUnit Users
```

In Exchange Server 2010 and 2013, this example returns a list of all the mailboxes in your organization in the Users OU.

### Example 2
```
Get-ThrottlingPolicyAssociation -ResultSize unlimited
```

This example retrieves a summary list of all throttling policy associations in your organization.

### Example 3
```
Get-ThrottlingPolicyAssociation -Anr Chr -DomainController DC01
```

In Exchange Server 2010 and 2013, this example returns all the mailboxes that resolve from the ambiguous name resolution search on the string "Chr" that are in the domain DC01. This example returns mailboxes for users such as Chris Ashton, Christian Hess, and Christa Geller.

### Example 4
```
Get-Group -Identity "Courtney Sweet" | Format-List
```

This example returns detailed information for the throttling policy association named Courtney Sweet that's associated with the user's mailbox.

## PARAMETERS

### -Anr
The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)

- DisplayName

- FirstName

- LastName

- Alias

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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
The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable Properties for the -Filter Parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the throttling policy association that you want to view. You can use any value that uniquely identifies the throttling policy association. For example:

- Name

- Distinguished name (DN)

- GUID

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: ThrottlingPolicyAssociationIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IgnoreDefaultScope
The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the distinguished name (DN) for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the OrganizationalUnit and Identity parameters together.

- You can't use the Credential parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
The Organization parameter specifies the organization that the object specified by the Identity parameter is in.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter specifies an organizational unit (OU) and is used to limit the results. If you use this parameter, you only get mailboxes in the container that you specify. You can use either the OU or the domain name. If you use the OU, you must specify the canonical name of the OU.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you set the recipient scope to include all recipients in the forest and don't use this parameter, it's possible that the user information is read from a global catalog with outdated information. If you use this parameter, multiple reads might be necessary to get the information.

By default, the recipient scope is set to the domain that hosts your servers that run Exchange.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottlingPolicy
The ThrottlingPolicy parameter filters the results by throttling policy. You can use any value that uniquely identifies the throttling policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/45e1248f-89c2-467c-8d5d-de1367111e08.aspx)
