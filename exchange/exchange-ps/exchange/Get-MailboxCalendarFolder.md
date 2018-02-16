---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MailboxCalendarFolder

## SYNOPSIS
!!! Exchange Server 2010

The Get-MailboxCalendarFolder cmdlet retrieves the publishing or sharing settings for a specified mailbox calendar folder.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxCalendarFolder cmdlet to retrieve the publishing or sharing settings for a specified mailbox calendar folder.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxCalendarFolder [-Identity] <MailboxFolderIdParameter> [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-MailboxCalendarFolder cmdlet retrieves information for the specified calendar folder. This information includes the calendar folder name, whether the folder is currently published or shared, the start and end range of calendar days published, the level of details published for the calendar, whether the published URL of the calendar can be searched on the Web, and the published URL for the calendar.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "User options" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Get-MailboxCalendarFolder cmdlet retrieves information for the specified calendar folder. This information includes the calendar folder name, whether the folder is currently published or shared, the start and end range of calendar days published, the level of details published for the calendar, whether the published URL of the calendar can be searched on the web, and the published URL for the calendar.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Calendar configuration" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

The Get-MailboxCalendarFolder cmdlet retrieves information for the specified calendar folder. This information includes the calendar folder name, whether the folder is currently published or shared, the start and end range of calendar days published, the level of details published for the calendar, whether the published URL of the calendar can be searched on the web, and the published URL for the calendar.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MailboxCalendarFolder -Identity kai:\Calendar
```

This example returns all provided publishing information for Kai's mailbox for the specified calendar folder. In this example, the Identity parameter specifies the mailbox with the alias format.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MailboxCalendarFolder -Identity kai:\Calendar
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the Identity parameter specifies the mailbox with the alias format.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxCalendarFolder -Identity kai:\Calendar
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the Identity parameter specifies the mailbox with the alias format.

### Example 1 -------------------------- (Exchange Online)
```
Get-MailboxCalendarFolder -Identity kai:\Calendar
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the Identity parameter specifies the mailbox with the alias format.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxCalendarFolder -Identity kai:\Calendar -DomainController DC1
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. This example also specifies DC1 as the domain controller to retrieve this information from Active Directory.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxCalendarFolder -Identity kai:\Calendar -DomainController DC1
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. This example also specifies DC1 as the domain controller to retrieve this information from Active Directory.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxCalendarFolder -Identity kai:\Calendar -DomainController DC1
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. This example also specifies DC1 as the domain controller to retrieve this information from Active Directory.

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxCalendarFolder -Identity kai:\Calendar -DomainController DC1
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. This example also specifies DC1 as the domain controller to retrieve this information from Active Directory.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-MailboxCalendarFolder -Identity contoso\kai:\Calendar
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the Identity parameter specifies the mailbox with the domain\\account format.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-MailboxCalendarFolder -Identity contoso\kai:\Calendar
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the Identity parameter specifies the mailbox with the domain\\account format.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-MailboxCalendarFolder -Identity contoso\kai:\Calendar
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the Identity parameter specifies the mailbox with the domain\\account format.

### Example 3 -------------------------- (Exchange Online)
```
Get-MailboxCalendarFolder -Identity contoso\kai:\Calendar
```

This example returns all provided publishing information for the specified calendar folder in Kai's mailbox. In this example, the Identity parameter specifies the mailbox with the domain\\account format.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox and folder path or folder name to the calendar folder that has the publishing settings configured. You can use the following values:

- GUID

- ADObjectID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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

[Online Version](https://technet.microsoft.com/library/dba2cebb-3c37-40ce-8ac0-93ec8d79ce0d.aspx)

