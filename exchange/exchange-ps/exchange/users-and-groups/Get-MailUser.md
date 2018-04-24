---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
title: Get-MailUser
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || eop-ps"
---

# Get-MailUser

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailUser cmdlet to view mail users and also guest users for Office 365 groups in cloud environments.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

###  (Default)
```
Get-MailUser [<CommonParameters>]
```

### Set3
```
Get-MailUser [-AccountPartition <AccountPartitionIdParameter>] [-Anr <String>] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController] [-ResultSize <Unlimited>]
 [-SoftDeletedMailUser] [-SortBy <String>] [-UsnForReconciliationSearch <Int64>] [<CommonParameters>]
```

### Set2
```
Get-MailUser [-AccountPartition <AccountPartitionIdParameter>] [-ArchiveDatabase <DatabaseIdParameter>]
 [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController] [-ResultSize <Unlimited>] [-SoftDeletedMailUser] [-SortBy <String>]
 [-UsnForReconciliationSearch <Int64>] [<CommonParameters>]
```

### Set1
```
Get-MailUser [[-Identity] <MailUserIdParameter>] [-AccountPartition <AccountPartitionIdParameter>]
 [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Filter <String>] [-IgnoreDefaultScope]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController] [-ResultSize <Unlimited>] [-SoftDeletedMailUser] [-SortBy <String>]
 [-UsnForReconciliationSearch <Int64>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailUser
```

This example returns a summary list of all mail users in the organization.

### -------------------------- Example 2 --------------------------
```
Get-MailUser -Identity Ed | Format-List
```

This example returnsdetailed information for the mail user named Ed.

## PARAMETERS

### -Anr
The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)

- DisplayName

- FirstName

- LastName

- Alias

```yaml
Type:
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -Credential
This parameter is available only in on-premises Exchange.

The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type:
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type:
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -Filter
The Filter parameter indicates the OPath filter used to filter recipients.

For more information about the filterable properties, see Filterable properties for the -Filter parameter (https://technet.microsoft.com/library/bb738155.aspx).

```yaml
Type:
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mail user that you want to view. You can use any value that uniquely identifies the mail user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type:
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: 1
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type:
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

```yaml
Type:
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -ReadFromDomainController
This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type:
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type:
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -SortBy
The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

- Alias

```yaml
Type:
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: false
Accept wildcard characters: False
```

### -AccountPartition
This parameter is reserved for internal Microsoft use.

```yaml
Type: AccountPartitionIdParameter
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDatabase
This parameter is reserved for internal Microsoft use.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SoftDeletedMailUser
This parameter is available only in the cloud-based service.

The SoftDeletedMailUser switch specifies whether to include only soft-deleted mail users in the results. You don't need to specify a value with this switch.

This switch is required to return soft-deleted mail users.

Soft-deleted mail users are deleted mail users that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsnForReconciliationSearch
This parameter is reserved for internal Microsoft use.

```yaml
Type: Int64
Parameter Sets: Set3, Set2, Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/37b36f1c-95ec-4896-a08a-985ef4aa23b7.aspx)
