---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-UMMailbox

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-UMMailbox cmdlet to display the Unified Messaging (UM) properties for a recipient who is UM-enabled.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMMailbox cmdlet to display the Unified Messaging (UM) properties for a UM-enabled recipient.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMMailbox cmdlet to view existing mailboxes that are Unified Messaging (UM) enabled.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-UMMailbox [-Anr <String>] [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Filter <String>]
 [-IgnoreDefaultScope] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController] [-ResultSize <Unlimited>]
 [-SortBy <String>] [<CommonParameters>]
```

### Set1
```
Get-UMMailbox [[-Identity] <MailboxIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-IgnoreDefaultScope] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-ReadFromDomainController] [-ResultSize <Unlimited>]
 [-SortBy <String>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-UMMailbox cmdlet retrieves the UM properties for a single UM mailbox. It can also return a list of UM-enabled mailboxes.

After this task is completed, you can see the properties and values configured on a single UM mailbox. Or, if the Identity parameter isn't used, the cmdlet returns a list of all the UM-enabled mailboxes in a forest.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM mailbox" entry in the Unified Messaging Permissions topic.

!!! Exchange Server 2013

The Get-UMMailbox cmdlet retrieves the Unified Messaging properties for a single UM mailbox. It can also return a list of UM-enabled mailboxes.

After this task is completed, you can see the properties and values configured on a single UM mailbox. Or, if the Identity parameter isn't used, the cmdlet returns a list of all the UM-enabled mailboxes in a forest.

When running in an environment with Exchange Server 2007 and Exchange Server 2013 where the user's mailbox is located on an Exchange 2007 Mailbox server, running the Get-UMMailbox cmdlet on an Exchange 2013 server won't work correctly. To resolve the issue, run the Get-UMMailbox cmdlet from an Exchange 2007 server or a computer running the Exchange 2007 administrative tools.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM mailboxes" entry in the Unified Messaging permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-UMMailbox | Format-List
```

This example displays a list of all the UM-enabled mailboxes in the Active Directory forest in a formatted list.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-UMMailbox | Format-List
```

This example displays a list of all the UM-enabled mailboxes in the Active Directory forest in a formatted list.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-UMMailbox
```

This example displays a summary list of all the UM-enabled mailboxes in your organization

### Example 1 -------------------------- (Exchange Online)
```
Get-UMMailbox
```

This example displays a summary list of all the UM-enabled mailboxes in your organization

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-UMMailbox -Identity tonysmith@contoso.com
```

This example displays the UM mailbox properties for tonysmith@contoso.com.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-UMMailbox -Identity tonysmith@contoso.com
```

This example displays the UM mailbox properties for tonysmith@contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-UMMailbox -Identity tonysmith@contoso.com | Format-List
```

This example displays detailed information for the UM-enabled mailbox for tonysmith@contoso.com.

### Example 2 -------------------------- (Exchange Online)
```
Get-UMMailbox -Identity tonysmith@contoso.com | Format-List
```

This example displays detailed information for the UM-enabled mailbox for tonysmith@contoso.com.

## PARAMETERS

### -Anr
!!! Exchange Server 2010, Exchange Server 2013

The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects that have an attribute that matches that string. The following default attributes are searched:

- CommonName (CN)

- DisplayName

- FirstName

- LastName

- Alias



!!! Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
!!! Exchange Server 2010

The Credential parameter specifies the user name and password to use to access Active Directory.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Credential parameter specifies the user name and password to use to access Active Directory.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
!!! Exchange Server 2010

The Filter parameter filters the results returned by the cmdlet.

For more information about the filterable properties, see Filterable Properties for the -Filter Parameter.



!!! Exchange Server 2013

The Filter parameter filters the results returned by the cmdlet.



!!! Exchange Server 2016, Exchange Online

The Filter parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax {\<Property\> -\<Comparison operator\> '\<Value\>'}.

- \<Property\> is a filterable property.

- -\<Comparison Operator\> is an OPATH comparison operator. For example -eq for equals and -like for string comparison. For more information about comparison operators, see about\_Comparison\_Operators (https://go.microsoft.com/fwlink/p/?LinkId=620712).

- \<Value\> is the property value. Text values with or without spaces need to be enclosed in quotation marks ('\<Value\>'). Don't use quotation marks with integers or the system values $true, $false, or $null.

You can chain multiple search criteria together using the logical operators -and and -or. For example, {\<Criteria1\>) -and \<Criteria2\>} or {(\<Criteria1\> -and \<Criteria2\>) -or \<Criteria3\>}.

You can filter by the following properties:

- AllowUMCallsFromNonUsers

- DisplayName

- DistinguishedName

- EmailAddresses

- ExchangeVersion

- Guid

- Id

- LegacyExchangeDN

- Name

- ObjectCategory

- ObjectClass

- OperatorNumber

- PhoneProviderId

- PrimarySmtpAddress

- SamAccountName

- ServerLegacyDN

- ServerName

- UMAddresses

- UMDtmfMap

- UMEnabled

- UMMailboxPolicy

- WhenChanged

- WhenChangedUTC

- WhenCreated

- WhenCreatedUTC

For more information, see Filterable properties for the -Filter parameter.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the user to enable for Unified Messaging. The values for this parameter include the following:

- ADObjectID

- GUID

- DN

- Domain\\Account

- UPN

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the user to enable for Unified Messaging. The values for this parameter include the following:

- ADObjectID

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the UM-enabled mailbox that you want to view. You can use any value that uniquely identifies the mailbox.

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
Type: MailboxIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IgnoreDefaultScope
!!! Exchange Server 2010

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the distinguished name for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the OrganizationalUnit and Identity parameters together.

- You can't use the Credential parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the distinguished name for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the OrganizationalUnit and Identity parameters together.

- You can't use the Credential parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



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

### -Organization
The Organization parameter is reserved for internal Microsoft use.

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
!!! Exchange Server 2010

The OrganizationalUnit parameter specifies an organizational unit (OU) and is used to limit the results. If you use this parameter, you retrieve only mailboxes in the container you specify. You can use the OU or the domain name. If you use the OU, you must specify the canonical name of the OU.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The OrganizationalUnit parameter specifies an organizational unit (OU) and is used to limit the results. If you use this parameter, you retrieve only mailboxes in the container you specify. You can use the OU or the domain name. If you use the OU, you must specify the canonical name of the OU.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID



```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
!!! Exchange Server 2010

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you have set the recipient scope to include all recipients in the forest and if you don't use this parameter, the user information may be read from a global catalog whose information is outdated. If you do use this parameter, multiple reads may be necessary to get the information. By default, the recipient scope is set to the domain that hosts your Exchange servers.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you've set the recipient scope to include all recipients in the forest and if you don't use this parameter, the user information may be read from a global catalog whose information is outdated. If you do use this parameter, multiple reads may be necessary to get the information. By default, the recipient scope is set to the domain that hosts your Exchange servers.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.



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

### -ResultSize
!!! Exchange Server 2010, Exchange Server 2013

The ResultSize parameter specifies a maximum number of results to be returned. Otherwise, a maximum number isn't specified, and the command returns all results.



!!! Exchange Server 2016, Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
!!! Exchange Server 2010, Exchange Server 2013

The SortBy parameter specifies the attribute by which to sort the results. You can sort by only one attribute at a time. You can sort by the following attributes:

- Alias

- DisplayName

- Name

The results are sorted in ascending order.



!!! Exchange Server 2016, Exchange Online

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

- ServerLegacyDN



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/4c652c1a-2f0e-45ff-99ca-d194057f1550.aspx)

