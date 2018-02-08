---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Get-DistributionGroupMember

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-DistributionGroupMember cmdlet to find existing distribution group members.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-DistributionGroupMember cmdlet to find existing distribution group members.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-DistributionGroupMember cmdlet to view the members of distribution groups and mail-enabled security groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-DistributionGroupMember [-Identity] <DistributionGroupMemberIdParameter> [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-IgnoreDefaultScope] [-ReadFromDomainController] [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

If your organization has multiple Active Directory domains, you may need to run the Set-ADServerSettings cmdlet with the ViewEntireForest parameter set to $true before running the Get-DistributionGroupMember cmdlet to view the entire forest. For more information, see "Example 2" later in this topic.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Distribution groups" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

If your organization has multiple Active Directory domains, you may need to run the Set-ADServerSettings cmdlet with the ViewEntireForest parameter set to $true before running the Get-DistributionGroupMember cmdlet to view the entire forest. For more information, see Example 2.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Distribution groups" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

If your organization has multiple Active Directory domains, you may need to run the Set-ADServerSettings cmdlet with the ViewEntireForest parameter set to $true before running the Get-DistributionGroupMember cmdlet to view the entire forest. For more information, see Example 2.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-DistributionGroupMember -Identity "Marketing USA"
```

This example returns the existing distribution group members for the distribution group Marketing USA.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-DistributionGroupMember -Identity "Marketing USA"
```

This example returns the existing distribution group members for the distribution group Marketing USA.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-DistributionGroupMember -Identity "Marketing USA"
```

This example returns the existing distribution group members for the distribution group named Marketing USA.

### Example 1 -------------------------- (Exchange Online)
```
Get-DistributionGroupMember -Identity "Marketing USA"
```

This example returns the existing distribution group members for the distribution group named Marketing USA.

### Example 1 -------------------------- (Exchange Online Protection)
```
Get-DistributionGroupMember -Identity "Marketing USA"
```

This example returns the existing distribution group members for the distribution group named Marketing USA.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-ADServerSettings -ViewEntireForest $true; Get-DistributionGroupMember -Identity "Marketing Worldwide"
```

This example sets the scope of the search to the entire forest by running the Set-ADServerSettings cmdlet, and then the Get-DistributionGroupMember cmdlet searches the entire forest for the distribution group members in the Marketing Worldwide distribution group.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-ADServerSettings -ViewEntireForest $true; Get-DistributionGroupMember -Identity "Marketing Worldwide"
```

This example sets the scope of the search to the entire forest by running the Set-ADServerSettings cmdlet, and then the Get-DistributionGroupMember cmdlet searches the entire forest for the distribution group members in the Marketing Worldwide distribution group.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-ADServerSettings -ViewEntireForest $true; Get-DistributionGroupMember -Identity "Marketing Worldwide"
```

This example sets the scope of the search to the entire forest by running the Set-ADServerSettings cmdlet, and then the Get-DistributionGroupMember cmdlet searches the entire forest for the distribution group members in the Marketing Worldwide distribution group.

### Example 2 -------------------------- (Exchange Online)
```
Set-ADServerSettings -ViewEntireForest $true; Get-DistributionGroupMember -Identity "Marketing Worldwide"
```

This example sets the scope of the search to the entire forest by running the Set-ADServerSettings cmdlet, and then the Get-DistributionGroupMember cmdlet searches the entire forest for the distribution group members in the Marketing Worldwide distribution group.

### Example 2 -------------------------- (Exchange Online Protection)
```
Set-ADServerSettings -ViewEntireForest $true; Get-DistributionGroupMember -Identity "Marketing Worldwide"
```

This example sets the scope of the search to the entire forest by running the Set-ADServerSettings cmdlet, and then the Get-DistributionGroupMember cmdlet searches the entire forest for the distribution group members in the Marketing Worldwide distribution group.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identityof the distribution group.

This parameter accepts the following values:

- Alias

  Example: JPhillips

- Canonical DN

  Example: Atlanta.Corp.Contoso.Com/Users/JPhillips

- Display Name

  Example: Jeff Phillips

- Distinguished Name (DN)

  Example: CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com

- Domain\\Account

  Example: Atlanta\\JPhillips

- GUID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2

- Immutable ID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com

- Legacy Exchange DN

  Example: /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips

- SMTP Address

  Example: Jeff.Phillips@contoso.com

- User Principal Name

  Example: JPhillips@contoso.com



!!! Exchange Server 2013

The Identity parameter specifies the identityof the distribution group.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Identity parameter specifies the distribution group or mail-enabled security group. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID



```yaml
Type: DistributionGroupMemberIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Credential
!!! Exchange Server 2010

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).



!!! Exchange Server 2013

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
!!! Exchange Server 2010

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the Credential parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the Credential parameter.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
!!! Exchange Server 2010

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you set the recipient scope to include all recipients in the forest, and if you don't use this parameter, it's possible that the user information is read from a global catalog with outdated information. If you use this parameter, multiple reads might be necessary to get the information.

By default, the recipient scope is set to the domain that hosts your Exchange servers.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you set the recipient scope to include all recipients in the forest, and if you don't use this parameter, it's possible that the user information is read from a global catalog with outdated information. If you use this parameter, multiple reads might be necessary to get the information.

By default, the recipient scope is set to the domain that hosts your Exchange servers.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. If you run the command Set-AdServerSettings -ViewEntireForest $true to include all objects in the forest and you don't use the ReadFromDomainController switch, it's possible that information will be read from a global catalog that has outdated information. When you use the ReadFromDomainController switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch.

By default, the recipient scope is set to the domain that hosts your Exchange servers.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
!!! Exchange Server 2010, Exchange Server 2013

The ResultSize parameter specifies the maximum number of members returned.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.



```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/15c71bc5-4246-44ac-8b34-8ccd585294b5.aspx)

