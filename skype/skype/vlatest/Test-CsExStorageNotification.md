---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsExStorageNotification

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Verifies that the Lync Server Storage Service running on a Front End server can subscribe to the Microsoft Exchange Server 2013 Preview mailbox notification service.
This is done by having the cmdlet subscribe to the service, create an item, verify that notification of the new item is received, and then, optionally, delete that item unsubscribe from the service.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Verifies that the Skype for Business Server 2015 Storage Service running on a Front End server can subscribe to the Exchange mailbox notification service.
This is done by having the cmdlet subscribe to the service, create an item, verify that notification of the new item is received, and then, optionally, delete that item unsubscribe from the service.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Test-CsExStorageNotification -SipUri <String> [-Binding <String>] [-DeleteItem] [-Force]
 [-HostNameStorageService <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Test-CsExStorageNotification cmdlet is used to verify that the Microsoft Exchange Server 2013 Preview notification service is able to notify Microsoft Lync Server 2013 Preview any time updates are made to a user's Contact List.
This cmdlet is valid only if you are using the unified contact store.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsExStorageNotification"}

Lync Server Control Panel: The functions carried out by the Test-CsExStorageNotification cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Test-CsExStorageNotification cmdlet is used to verify that the Exchange notification service is able to notify Skype for Business Server 2015 any time updates are made to a user's Contact List.
This cmdlet is valid only if you are using the unified contact store.

Skype for Business Server Control Panel: The functions carried out by the Test-CsExStorageNotification cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 tests to see if the Lync Server Storage Service can connect to the Exchange Server mailbox notification service for the user sip:kenmyer@litwareinc.com.
In this example, NetNamedPipe is used as the WCF binding.

Test-CsExStorageNotification -SipUri "sip:kenmyer@litwareinc.com" -Binding "NetNamedPipe"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 tests to see if the Skype for Business Server 2015 Storage Service can connect to the Exchange Server mailbox notification service for the user sip:kenmyer@litwareinc.com.
In this example, NetNamedPipe is used as the WCF binding.

Test-CsExStorageNotification -SipUri "sip:kenmyer@litwareinc.com" -Binding "NetNamedPipe"

## PARAMETERS

### -SipUri
SIP address of the Exchange Server mailbox where the test item should be created.

```yaml
Type: String
Parameter Sets: (All)
Aliases: s
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Binding
Windows Communication Foundation (WCF) binding.
A WCF binding determines the transport, encoding, and protocol details required for clients and services to communicate with each other.
valid values are:

* NetNamedPipe
* NetTCP

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

Fully qualified domain name of the server where the Skype for Business Server 2015 Storage Service is running.
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Test-CsExStorageNotification does not accept pipelined input.

###  
None.
The Test-CsExStorageNotification cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsExStorageNotification returns instances of the Microsoft.Rtc.Management.ResourceData object.

###  
The Test-CsExStorageNotification cmdlet returns instances of the Microsoft.Rtc.Management.ResourceData object.

## NOTES

## RELATED LINKS

[Test-CsExStorageConnectivity]()

[Online Version](http://technet.microsoft.com/EN-US/library/d8fe3b22-7a76-4d70-9bc1-b54b37f68449(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d8fe3b22-7a76-4d70-9bc1-b54b37f68449(OCS.16).aspx)

