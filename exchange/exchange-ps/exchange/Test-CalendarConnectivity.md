---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Test-CalendarConnectivity

## SYNOPSIS
!!! Exchange Server 2010

Use the Test-CalendarConnectivity cmdlet to verify that anonymous calendar sharing is enabled and working properly. The Calendar virtual directory is a subdirectory of the Microsoft Office Outlook Web App virtual directory. When you run this command without any parameters, the command tests against all Outlook Web App calendar virtual directories.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Test-CalendarConnectivity cmdlet to verify that anonymous calendar sharing is enabled and working properly. The Calendar virtual directory is a subdirectory of the Microsoft OfficeOutlook Web App virtual directory. When you run this command without any parameters, the command tests against all Outlook Web App calendar virtual directories.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Test-CalendarConnectivity cmdlet to verify that anonymous calendar sharing is enabled and working properly. The Calendar virtual directory is a subdirectory of the Microsoft Outlook on the web virtual directories. When you run this command without any parameters, the command tests calendar connectivity against all Outlook on the web virtual directories.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-CalendarConnectivity [[-ClientAccessServer] <ServerIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-LightMode] [-MailboxServer <ServerIdParameter>] [-MonitoringContext] [-ResetTestAccountCredentials]
 [-TestType <Internal | External>] [-Timeout <UInt32>] [-TrustAnySSLCertificate]
 [-VirtualDirectoryName <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

To test virtual directories on a Client Access server, there must be a test Active Directory account. There must also be a test mailbox in each Active Directory site that hosts mailboxes that can be accessed through the virtual directories being tested. You can create the test account by running the New-TestCasConnectivityUser.ps1 script. The default location for this file is: \\\\Program Files\\Microsoft\\Exchange Server\\V14\\Scripts.

If the test environment wasn't created during the Mailbox server setup, you're prompted to run the script that creates the test mailboxes and test users when you run this command.

If the server hosting the test mailbox isn't available, the command returns an error that might not clearly identify the problem. To avoid this, use the Test-MAPIConnectivity cmdlet to verify that the server that hosts the test mailbox is running and that the mailbox is available before you run this command.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Outlook Web App virtual directories" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

To test virtual directories on a Client Access server, there must be a test Active Directory account. There must also be a test mailbox in each Active Directory site that hosts mailboxes that can be accessed through the virtual directories being tested. You can create the test account by running the New-TestCasConnectivityUser.ps1 script. The default location for this file is: \\\\Program Files\\Microsoft\\Exchange Server\\V15\\Scripts.

If the test environment wasn't created during the Mailbox server setup, you're prompted to run the script that creates the test mailboxes and test users when you run this command.

If the server hosting the test mailbox isn't available, the command returns an error that might not clearly identify the problem. To avoid this, use the Test-MapiConnectivity cmdlet to verify that the server that hosts the test mailbox is running and that the mailbox is available before you run this command.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Outlook Web App virtual directories" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016

The Test-CalendarConnectivity cmdlet tests anonymous calendar sharing by connecting to a specified Outlook on the web virtual directory, to any Outlook on the web virtual directories on a specified Exchange server, or to any Outlook on the web virtual directories that are available in the local Active Directory site.

The first time you use this cmdlet, you might be required to create a test user. To create a test user, run the following command.

If the server hosting the test mailbox isn't available, the command returns an error that might not clearly identify the problem. To avoid this, use the Test-MapiConnectivity cmdlet to verify that the server that hosts the test mailbox is running and that the mailbox is available before you run this command.

The test results are displayed on-screen. The cmdlet returns the following information.

- CasServer: The Exchange server that the client connected to.

- LocalSite: The name of the local Active Directory site.

- Scenario: The operations that are tested. Values are: Logon, CalendaICS, and CalendarHTML.

- Result: The values returned are typically Success, Skipped, or Failure.

- Latency(MS): The time required to complete the test in milliseconds.

- Error: Any error messages that were encountered.

You can write the results to a file by piping the output to ConvertTo-Html or ConvertTo-Csv and adding \> \<filename\> to the command. For example:

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Test-CalendarConnectivity -ClientAccessServer CAS01
```

This example tests the connectivity for the Client Access server CAS01.

### Example 1 -------------------------- (Exchange Server 2013)
```
Test-CalendarConnectivity -ClientAccessServer CAS01
```

This example tests the connectivity for the Client Access server CAS01.

### Example 1 -------------------------- (Exchange Server 2016)
```
Test-CalendarConnectivity -ClientAccessServer MBX01
```

This example tests the anonymous calendar sharing for the server named MBX01.

## PARAMETERS

### -ClientAccessServer
!!! Exchange Server 2010, Exchange Server 2013

The ClientAccessServer parameter specifies the name of the Client Access server to test. If this parameter is included, all Outlook Web App calendar virtual directories on the Client Access server are tested against all Exchange Mailbox servers in the local Active Directory site.



!!! Exchange Server 2016

The ClientAccessServer parameter specifies the Exchange server to test. This server has the Client Access server role installed, and is responsible for accepting client connections.

You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID



```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
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

### -LightMode
!!! Exchange Server 2010, Exchange Server 2013

The LightMode parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of the command.

This parameter is implemented for other Exchange diagnostic commands where it's used to run a less intensive version of a command.



!!! Exchange Server 2016

This parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of this command.



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

### -MailboxServer
!!! Exchange Server 2010, Exchange Server 2013

The MailboxServer parameter specifies the name of the Mailbox server to test. If not specified, all Mailbox servers in the local Active Directory site are tested.



!!! Exchange Server 2016

The MailboxServer parameter specifies the Exchange 2016 or Exchange 2013 Mailbox server that you want to test. This parameter identifies the backend server that accepts proxied connections from the frontend server where clients connect.

You can use any value that uniquely identifies the server. For example:

- Name

- Distinguished name (DN)

- ExchangeLegacyDN

- GUID

If you don't use this parameter, connections to all Mailbox servers in the local Active Directory site are tested.



```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringContext
!!! Exchange Server 2010

The MonitoringContext parameter shows you what information is returned to Microsoft System Center Operations Manager 2007. When System Center Operations Manager 2007 executes the Test-CalendarConnectivity cmdlet, it requires additional information to be returned. By setting this parameter to $true, you can see exactly what would be returned to Operations Manager 2007. This parameter is informational only and has no effect on Operations Manager 2007.



!!! Exchange Server 2013

The MonitoringContext switch includes the associated monitoring events and performance counters in the results. You don't need to specify a value with this switch. Typically, you include the monitoring events and performance counters in the results when the output is passed to Microsoft System Center Operations Manager 2007 or System Center 2012 - Operations Manager.



!!! Exchange Server 2016

The MonitoringContext switch includes the associated monitoring events and performance counters in the results. Typically, you include the monitoring events and performance counters in the results when the output is passed to MicrosoftSystem Center Operations Manager (SCOM). You don't need to specify a value with this switch.



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

### -ResetTestAccountCredentials
!!! Exchange Server 2010

The ResetTestAccountCredentials parameter specifies whether to reset the password for the test account used to run this command. The password for the test account is usually reset every 7 days. Use this parameter to force a password reset any time a password reset is required for security reasons.



!!! Exchange Server 2013, Exchange Server 2016

The ResetTestAccountCredentials switch resets the password for the test account that's used to run this command. The password for the test account is typically reset every seven days. Use this switch to force a password reset any time it's required for security reasons.



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

### -TestType
!!! Exchange Server 2010, Exchange Server 2013

The TestType parameter specifies whether the command tests internal or external URLs. Values are Internal and External. If you don't specify this parameter, the default is TestType:Internal.



!!! Exchange Server 2016

The TestType parameter specifies whether the command tests internal or external URLs. Values are Internal and External. The default value is Internal.



```yaml
Type: Internal | External
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Timeout
!!! Exchange Server 2010

The TimeOut parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of the command.

This parameter is implemented for other Exchange diagnostic commands where it's used to run a less intensive version of a command.



!!! Exchange Server 2013

The Timeout parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of the command.

This parameter is implemented for other Exchange diagnostic commands where it's used to run a less intensive version of a command.



!!! Exchange Server 2016

This parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of this command.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustAnySSLCertificate
!!! Exchange Server 2010, Exchange Server 2013

The TrustAnySSLCertificate parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of the command.

This parameter is implemented for other Exchange diagnostic commands where it's used to run a less intensive version of a command.



!!! Exchange Server 2016

This parameter isn't implemented for this diagnostic command. Using this parameter doesn't change the behavior of this command.



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

### -VirtualDirectoryName
!!! Exchange Server 2010, Exchange Server 2013

The VirtualDirectoryName parameter specifies the name of the virtual directory to test on a particular Client Access server. If this parameter isn't included, all Outlook Web App calendar virtual directories that support calendar sharing are tested.



!!! Exchange Server 2016

The VirtualDirectoryName parameter specifies the name of the Outlook on the web virtual directory that you want to test. Enclose values that contain spaces in quotation marks (").

If you don't use this parameter, all available Outlook on the web virtual directories are tested.



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

[Online Version](https://technet.microsoft.com/library/48e305d0-426b-455f-b160-41b199d6fdee.aspx)

