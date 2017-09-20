---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Test-CsExStorageConnectivity
schema: 2.0.0
---

# Test-CsExStorageConnectivity

## SYNOPSIS
Verifies that the Skype for Business Server Storage Service is working on a Front End Server.
This is done by creating a test email message in the specified Exchange mailbox and then optionally deleting that message at the end of the text.
`Test-CsExStorageConnectivity` also verifies that Exchange archiving is working as expected.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Test-CsExStorageConnectivity [-SipUri] <String> [-Binding <String>] [-DeleteItem] [-Folder <ExchFolder>]
 [-Force] [-HostNameStorageService <String>] [-UseCache] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsExStorageConnectivity` cmdlet is used to verify that server-to-server authentication is working between Skype for Business Server and Exchange.
To verify server-to-server authentication, the cmdlet logs on to Exchange writes an item to the Conversation History folder in the specified mailbox, and then deletes that item.

The `Test-CsExStorageConnectivity` cmdlet can also be used to verify that connections can be made to the archiving store on Exchange.

If you receive an "Access Denied" error message when running this cmdlet that typically means that you are not a member of the local group RTC Local User Administrators.
You can either be added to that group or to the Active Directory group RTCUniversalUserAdmins (which is a member of the RTC Local User Administrators) in order to get the required permissions to run the `Test-CsExStorageConnectivity` cmdlet.

Skype for Business Server Control Panel: The functions carried out by the `Test-CsExStorageConnectivity` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsExStorageConnectivity -SipUri "sip:kenmyer@litwareinc.com" -Binding "NetNamedPipe"
```

The command shown in Example 1 tests to see if the Skype for Business Server Storage Service can connect to the Exchange mailbox for the user sip:kenmyer@litwareinc.com.
In this example, NetNamedPipe is used as the WCF binding.


### -------------------------- Example 2 --------------------------
```
Test-CsExStorageConnectivity -SipUri "sip:kenmyer@litwareinc.com" -Binding "NetNamedPipe" -Folder Dumpster
```

Example 2 verifies that the Skype for Business Server Storage Service can connect to the archiving store on Exchange.
(Note that this command will fail if the specified user has not been enabled for Exchange archiving.) In this example, a connection is made to the Dumpster folder: the Recoverable Items purge folder, a folder that stores deleted items and is not visible to end users.


## PARAMETERS

### -SipUri
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
Fully qualified domain name (FQDN) of the server where the Skype for Business Server Storage Service is running.
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
The `Test-CsExStorageConnectivity` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsExStorageConnectivity` cmdlet returns instances of the Microsoft.Rtc.Management.ResourceData object.

## NOTES

## RELATED LINKS

[Test-CsExStorageNotification]()
