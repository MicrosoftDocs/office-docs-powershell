---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Update-SafeList

## SYNOPSIS
!!! Exchange Server 2010

Use the Update-SafeList cmdlet to update the safelist aggregation data in Active Directory. Safelist aggregation data is used in anti-spam filtering in Microsoft Exchange Server 2010. EdgeSync replicates safelist aggregation data to computers that have the Edge Transport server role installed.

!!! Exchange Server 2013, Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Update-SafeList cmdlet to update the safelist aggregation data in Active Directory. Safelist aggregation data is used in the built-in anti-spam filtering in Microsoft Exchange. EdgeSync replicates safelist aggregation data to Edge Transport servers in the perimeter network.

## SYNTAX

```
Update-SafeList [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>] [-EnsureJunkEmailRule]
 [-IncludeDomains] [-Type <SafeSenders | SafeRecipients | Both | BlockedSenders | All>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Update-SafeList cmdlet reads the safelist aggregation data stored on a Microsoft Office Outlook user mailbox and then hashes and writes the data to the corresponding user object in Active Directory. Safelist aggregation data contains the Outlook user's Safe Senders List and Safe Recipients List.

To activate the options to include safe domains, or to change the maximum values for the default settings, you must change the msexchangemailboxassistants.exe.config file. Specifically, the following settings and values can be changed in the appsettings section of the msexchangemailboxassistants.exe.config file:

- IncludeSafeDomains: The value for this setting can be True or False.

- UpdateInterval: By default, the value for this setting is 15 minutes. This setting can have a value from 15 minutes through 1 day.

- TestUpdateInterval: TestUpdateInterval is used in test environments. This setting can have a value from 10 seconds through 1 hour.

- MaxSafeSenders: 3\*1024

- MaxSafeRecipients: 2\*1024

- MaxBlockedSenders: By default, the value for this setting is 500. The maximum value is 1000.

For example, the settings in the appsettings section of the msexchangemailboxassistants.exe.config file may be as follows:

\<configuration\>

\<runtime\>

\<gcConcurrent enabled="false" /\>

\<generatePublisherEvidence enabled="false" /\>

\</runtime\>

\<appSettings\>

\<add key="IncludeSafeDomains" value="true" /\>

\</appSettings\>

\</configuration\>

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "SafeList aggregation" entry in the Transport Permissions topic.

!!! Exchange Server 2013

The Update-SafeList cmdlet reads the safelist aggregation data stored on a Microsoft Outlook user mailbox and then hashes and writes the data to the corresponding user object in Active Directory. The command compares the binary attribute created to any value stored on the attribute. If the two values are identical, the command doesn't update the user attribute value with the safelist aggregation data. Safelist aggregation data contains the Outlook user's Safe Senders List and Safe Recipients List.

Be mindful of the network and replication traffic that may be generated when you run the Update-SafeList cmdlet. Running the command on multiple mailboxes where safelists are heavily used may generate a significant amount of traffic. We recommend that if you run the command on multiple mailboxes, you should run the command during off-peak, non-business hours.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "SafeList aggregation" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

The Update-SafeList cmdlet reads the safelist aggregation data stored on a Microsoft Outlook user mailbox and then hashes and writes the data to the corresponding user object in Active Directory. The command compares the binary attribute created to any value stored on the attribute. If the two values are identical, the command doesn't update the user attribute value with the safelist aggregation data. Safelist aggregation data contains the Outlook user's Safe Senders List and Safe Recipients List.

Be mindful of the network and replication traffic that may be generated when you run the Update-SafeList cmdlet. Running the command on multiple mailboxes where safelists are heavily used may generate a significant amount of traffic. We recommend that if you run the command on multiple mailboxes, you should run the command during off-peak, non-business hours.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Update-Safelist -Identity kim@contoso.com
```

This example updates Safe Senders List data for the single user kim@contoso.com.

### Example 1 -------------------------- (Exchange Server 2013)
```
Update-Safelist kim@contoso.com
```

This example updates Safe Senders List data for the single user kim@contoso.com.

### Example 1 -------------------------- (Exchange Server 2016)
```
Update-Safelist kim@contoso.com
```

This example updates Safe Senders List data for the single user kim@contoso.com.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-AdServerSettings -ViewEntireForest $true; Get-Mailbox -ResultSize Unlimited -RecipientTypeDetails UserMailbox | Update-Safelist
```

This example updates safelist data for all user mailboxes in your Exchange organization. By default, the Exchange Management Shell is configured to retrieve or modify objects that reside in the domain in which the Exchange server resides. Therefore, to retrieve all the mailboxes in your Exchange organization, you must first set the scope of the Shell to the entire forest using the Set-AdServerSettings cmdlet. For more information, see Set-AdServerSettings.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-AdServerSettings -ViewEntireForest $true; Get-Mailbox -ResultSize Unlimited -RecipientTypeDetails UserMailbox | Update-Safelist
```

This example updates safelist data for all user mailboxes in your Exchange organization. By default, the Exchange Management Shell is configured to retrieve or modify objects that reside in the domain in which the Exchange server resides. Therefore, to retrieve all the mailboxes in your Exchange organization, you must first set the scope of the Shell to the entire forest using the Set-AdServerSettings cmdlet. For more information, see Set-AdServerSettings.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-AdServerSettings -ViewEntireForest $true; Get-Mailbox -ResultSize Unlimited -RecipientTypeDetails UserMailbox | Update-Safelist
```

This example updates safelist data for all user mailboxes in your Exchange organization. By default, the Exchange Management Shell is configured to retrieve or modify objects that reside in the domain in which the Exchange server resides. Therefore, to retrieve all the mailboxes in your Exchange organization, you must first set the scope of the Shell to the entire forest using the Set-AdServerSettings cmdlet. For more information, see Set-AdServerSettings.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the Outlook user mailbox from which you want to collect safelist aggregation data. Valid input for this parameter includes the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the mailbox from which you want to collect safelist aggregation data.

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



!!! Exchange Server 2016

The Identity parameter specifies the mailbox from which you want to collect safelist aggregation data. You can use any value that uniquely identifies the mailbox.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
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

### -EnsureJunkEmailRule
!!! Exchange Server 2010

The EnsureJunkEmailRule parameter specifies whether to force the junk e-mail rule to be turned on for the mailbox if the rule isn't turned on already.

The junk e-mail rule can only be created after the user logs on to the mailbox. If the user has never logged on to the mailbox, this parameter can't turn on the junk e-mail rule.



!!! Exchange Server 2013, Exchange Server 2016

The EnsureJunkEmailRule parameter specifies whether to force the junk email rule to be turned on for the mailbox if the rule isn't turned on already.

The junk email rule can only be created after the user logs on to the mailbox. If the user has never logged on to the mailbox, this parameter can't turn on the junk email rule.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeDomains
!!! Exchange Server 2010

The IncludeDomains parameter specifies whether to include the sender domains specified by users in Outlook in the safelist aggregation data. By default, domains specified by the senders aren't included.

In most cases, we don't recommend that you include domains because users may include the domains of large Internet service providers (ISPs), which could unintentionally provide addresses that may be used or spoofed by spammers.



!!! Exchange Server 2013, Exchange Server 2016

The IncludeDomains switch specifies whether to include the sender domains specified by users in Outlook in the safelist aggregation data. By default, domains specified by the senders aren't included.

In most cases, we don't recommend that you include domains because users may include the domains of large Internet service providers (ISPs), which could unintentionally provide addresses that may be used or spoofed by spammers.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
!!! Exchange Server 2010

The Type parameter specifies which user-generated list is updated to the user object. Valid values for this parameter are SafeSenders, SafeRecipients, and Both. The default value is SafeSenders.

In Exchange 2010, the safelist aggregation feature doesn't act on Safe Recipients List data. We don't recommend running the Type parameter with the SafeRecipients or Both values.



!!! Exchange Server 2013, Exchange Server 2016

The Type parameter specifies which user-generated list is updated to the user object. Valid values for this parameter are SafeSenders, SafeRecipients, and Both. The default value is SafeSenders.

The safelist aggregation feature doesn't act on Safe Recipients List data. We don't recommend running the Type parameter with the SafeRecipients or Both values.



```yaml
Type: SafeSenders | SafeRecipients | Both | BlockedSenders | All
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
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

[Online Version](https://technet.microsoft.com/library/e862c54c-4de0-4ef6-832e-ebb0cf8b2794.aspx)

