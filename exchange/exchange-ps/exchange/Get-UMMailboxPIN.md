---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-UMMailboxPin

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-UMMailboxPIN cmdlet to return information from a Unified Messaging (UM)-enabled user's mailbox.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMMailboxPIN cmdlet to return information from a Unified Messaging (UM)-enabled user's mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMMailboxPin [[-Identity] <MailboxIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-IgnoreErrors] [-Organization <OrganizationIdParameter>] [-ReadFromDomainController]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-UMMailboxPIN cmdlet returns information that's calculated from the PIN data stored in encrypted form in the user's mailbox. This cmdlet also shows whether the mailbox or user access has been locked out.

After this task is completed, you can view information on a user's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM mailbox" entry in the Unified Messaging Permissions topic.

!!! Exchange Server 2013

The Get-UMMailboxPIN cmdlet returns information calculated from the PIN data stored in encrypted form in the user's mailbox. This cmdlet also shows whether the mailbox or user access has been locked out.

After this task is completed, you can view information on a user's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "UM mailboxes" entry in the Unified Messaging permissions topic.

!!! Exchange Server 2016, Exchange Online

The Get-UMMailboxPIN cmdlet returns information calculated from the PIN data stored in encrypted form in the user's mailbox. This cmdlet also shows whether the mailbox or user access has been locked out.

After this task is completed, you can view information on a user's mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-UMMailboxPIN
```

This example displays the UM mailbox PIN-related properties for all UM-enabled users.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-UMMailboxPIN
```

This example displays the UM mailbox PIN-related properties for all UM-enabled users.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-UMMailboxPIN
```

This example displays the UM mailbox PIN-related properties for all UM-enabled users.

### Example 1 -------------------------- (Exchange Online)
```
Get-UMMailboxPIN
```

This example displays the UM mailbox PIN-related properties for all UM-enabled users.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-UMMailboxPIN -Identity tonysmith@contoso.com
```

This example displays the UM mailbox PIN-related properties for tonysmith@contoso.com.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-UMMailboxPIN -Identity tonysmith@contoso.com
```

This example displays the UM mailbox PIN-related properties for tonysmith@contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-UMMailboxPIN -Identity tonysmith@contoso.com
```

This example displays the UM mailbox PIN-related properties for tonysmith@contoso.com.

### Example 2 -------------------------- (Exchange Online)
```
Get-UMMailboxPIN -Identity tonysmith@contoso.com
```

This example displays the UM mailbox PIN-related properties for tonysmith@contoso.com.

## PARAMETERS

### -Credential
!!! Exchange Server 2010

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).



!!! Exchange Server 2013

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



!!! Exchange Server 2016, Exchange Online

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

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identifier that can be used to retrieve information about the mailbox. The values for this parameter include the following:

- ADObjectID

- GUID

- DN

- Domain\\Account

- UPN

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the identifier that can be used to retrieve information about the mailbox. The values for this parameter include the following:

- ADObjectID

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox.

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
Parameter Sets: (All)
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

- You can only use the distinguished name (DN) for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the Organization and Identity parameters together.

- You can't use the Credential parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

- You can't use the Organization and Identity parameters together.

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

### -IgnoreErrors
!!! Exchange Server 2010

The IgnoreErrors parameter specifies whether errors that may occur when running this cmdlet are written as warnings.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The IgnoreErrors switch specifies whether errors that may occur when running this cmdlet are written as warnings.



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

### -ReadFromDomainController
!!! Exchange Server 2010

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you have set the recipient scope to include all recipients in the forest and if you don't use this parameter, the user information may be read from a global catalog whose information is outdated. If you use this parameter, multiple reads may be necessary to get the information. By default, the recipient scope is set to the domain that hosts your Exchange servers.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ReadFromDomainController parameter specifies that the user information is read from a domain controller in the user's domain. If you've set the recipient scope to include all recipients in the forest and if you don't use this parameter, the user information may be read from a global catalog whose information is outdated. If you use this parameter, multiple reads may be necessary to get the information. By default, the recipient scope is set to the domain that hosts your Exchange servers.



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

The ResultSize parameter specifies a maximum number of results to be returned. If a maximum number isn't specified, the cmdlet returns all results.



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

[Online Version](https://technet.microsoft.com/library/93924584-5955-4e54-8b74-bf00cf269317.aspx)

