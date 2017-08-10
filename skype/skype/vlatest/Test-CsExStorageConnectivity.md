---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsExStorageConnectivity

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Verifies that the Lync Server Storage Service is working on a Front End server; this is done by creating a test email message in the specified Exchange Server mailbox and then optionally deleting that message at the end of the text.
Test-CsExStroageConnectivity also verifies that Exchange archiving is working as expected.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Verifies that the Skype for Business Server 2015 Storage Service is working on a Front End Server.
This is done by creating a test email message in the specified Exchange mailbox and then optionally deleting that message at the end of the text.
Test-CsExStorageConnectivity also verifies that Exchange archiving is working as expected.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Test-CsExStorageConnectivity [-SipUri] <String> [-Binding <String>] [-DeleteItem] [-Folder <ExchFolder>]
 [-Force] [-HostNameStorageService <String>] [-UseCache] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Test-CsExStorageConnectivity cmdlet is used to verify that server-to-server authentication is working between Microsoft Lync Server 2013 Preview and Microsoft Exchange Server 2013 Preview.
To verify server-to-server authentication, the cmdlet logs on to Microsoft Exchange, writes an item to the Conversation History folder in the specified mailbox, and then deletes that item.

Test-CsExStorageConnectivity can also be used to verify that connections can be made to the archiving store on Exchange 2013 Preview.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsExStorageConnectivity"}

Lync Server Control Panel: The functions carried out by the Test-CsExStorageConnectivity cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Test-CsExStorageConnectivity cmdlet is used to verify that server-to-server authentication is working between Skype for Business Server 2015 and Exchange.
To verify server-to-server authentication, the cmdlet logs on to Exchange writes an item to the Conversation History folder in the specified mailbox, and then deletes that item.

The Test-CsExStorageConnectivity cmdlet can also be used to verify that connections can be made to the archiving store on Exchange.

If you receive an "Access Denied" error message when running this cmdlet that typically means that you are not a member of the local group RTC Local User Administrators.
You can either be added to that group or to the Active Directory group RTCUniversalUserAdmins (which is a member of the RTC Local User Administrators) in order to get the required permissions to run the Test-CsExStorageConnectivity cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Test-CsExStorageConnectivity cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 tests to see if the Lync Server Storage Service can connect to the Exchange Server mailbox for the user sip:kenmyer@litwareinc.com.
In this example, NetNamedPipe is used as the WCF binding.

Test-CsExStorageConnectivity -SipUri "sip:kenmyer@litwareinc.com" -Binding "NetNamedPipe"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 tests to see if the Skype for Business Server 2015 Storage Service can connect to the Exchange mailbox for the user sip:kenmyer@litwareinc.com.
In this example, NetNamedPipe is used as the WCF binding.

Test-CsExStorageConnectivity -SipUri "sip:kenmyer@litwareinc.com" -Binding "NetNamedPipe"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 verifies that the Lync Storage Service can connect to the archiving store on Microsoft Exchange Server 2013 Preview.
(Note that this command will fail if the specified user has not been enabled for Exchange archiving.) In this example, a connection is made to the Dumpster folder: the Recoverable Items purge folder, a folder, used to store deleted items, that is not visible to end users.

Test-CsExStorageConnectivity -SipUri "sip:kenmyer@litwareinc.com" -Binding "NetNamedPipe" -Folder Dumpster

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 verifies that the Skype for Business Server 2015 Storage Service can connect to the archiving store on Exchange.
(Note that this command will fail if the specified user has not been enabled for Exchange archiving.) In this example, a connection is made to the Dumpster folder: the Recoverable Items purge folder, a folder that stores deleted items and is not visible to end users.

Test-CsExStorageConnectivity -SipUri "sip:kenmyer@litwareinc.com" -Binding "NetNamedPipe" -Folder Dumpster

## PARAMETERS

### -SipUri
**Below Content Applies To:** Lync Server 2013

SIP address of the Exchange Server mailbox where the test item should be created.



**Below Content Applies To:** Skype for Business Server 2015

SIP address of the Exchange mailbox where the test item should be created.



```yaml
Type: String
Parameter Sets: (All)
Aliases: s
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Binding
**Below Content Applies To:** Lync Server 2013

Windows Communication Foundation (WCF) binding.
A WCF binding determines the transport, encoding, and protocol details required for clients and services to communicate with each other.
valid values are:

* NetNamedPipe
* NetTCP



**Below Content Applies To:** Skype for Business Server 2015

Windows Communication Foundation (WCF) binding.
A WCF binding determines the transport, encoding, and protocol details required for clients and services to communicate with each other.
valid values are:

NetNamedPipe

NetTCP



```yaml
Type: String
Parameter Sets: (All)
Aliases: b
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteItem
When present, the test item will be deleted from the Exchange mailbox at the end of the text.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Folder
**Below Content Applies To:** Lync Server 2013

Specifies the Exchange 2013 Preview archiving folder that the cmdlet should connect to.
Allowed values are:

* ConversationHistory
* Inbox
* Dumpster



**Below Content Applies To:** Skype for Business Server 2015

Specifies the Exchange archiving folder that the cmdlet should connect to.
Allowed values are:

ConversationHistory

Inbox

Dumpster



```yaml
Type: ExchFolder
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostNameStorageService
**Below Content Applies To:** Lync Server 2013

Fully qualified domain name of the server where the Lync Server Storage Service is running.
This parameter is required if the Binding is set to NetTCP.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of the server where the Skype for Business Server 2015 Storage Service is running.
This parameter is required if the Binding is set to NetTCP.



```yaml
Type: String
Parameter Sets: (All)
Aliases: h
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseCache
When presents, instructs the cmdlet to used cached auto discovery results when attempting to connect to Exchange.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Test-CsExStorageConnectivity does not accept pipelined input.

###  
None.
The Test-CsExStorageConnectivity cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsExStorageConnectivity returns instances of the Microsoft.Rtc.Management.ResourceData object.

###  
The Test-CsExStorageConnectivity cmdlet returns instances of the Microsoft.Rtc.Management.ResourceData object.

## NOTES

## RELATED LINKS

[Test-CsExStorageNotification]()

[Online Version](http://technet.microsoft.com/EN-US/library/20fda110-5e09-4453-bb7b-a062abaab87f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/20fda110-5e09-4453-bb7b-a062abaab87f(OCS.16).aspx)

