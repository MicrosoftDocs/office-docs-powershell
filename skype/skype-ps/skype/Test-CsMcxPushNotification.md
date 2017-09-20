---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsMcxPushNotification

## SYNOPSIS
Verifies that the push notification service is working.
The push notification service (Apple Push Notification Service and Microsoft Push Notification Service) provides a way to send notifications about events such as new instant messages or new voice mail to mobile devices like iPhones and Windows Phones, even if the Skype for Business application on those devices is currently suspended or running in the background.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

```
Test-CsMcxPushNotification [-AccessEdgeFqdn] <String> [-Certificate <X509Certificate2>] [-Force]
 [-OutLoggerVariable <String>] [-OutVerboseVariable <String>] [<CommonParameters>]
```

## DESCRIPTION
The Apple Push Notification Service and the Skype for Business Server Push Notification Service enable users running Skype for Business on their Apple iPhone or Windows Phone to receive notifications about Skype for Business events even when the application is suspended or running in the background.
For example, users can receive notice for events such as these:

- Invitations to a new instant messaging session or conference
- New instant messages
- New voice mail

Without the push notification service, users would receive these notices only when Skype for Business was in the foreground and serving as the active application.

The `Test-CsMcxPushNotification` cmdlet provides a way for administrators to verify that the push notification service is working.
When using this cmdlet, make sure that the AccessEdgeFqdn parameter points to the internal edge of the proxy server to which push notification traffic is directed.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsMcxPushNotification -AccessEdgeFqdn "atl-edge-001.litwareinc.com"
```

The command shown in Example 1 tests the push notification service accessed through the Edge server atl-edge-001.litwareinc.com.
The AccessEdgeFqdn must point to the internal edge of the proxy server to which push notification traffic is directed.


## PARAMETERS

### -AccessEdgeFqdn
Fully qualified domain name of the Access Edge server used to connect to the push notification service.

```yaml
Type: String
Parameter Sets: (All)
Aliases: fqdn
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Certificate
Enables you to specify an X509 certificate to use for authentication purposes

```yaml
Type: X509Certificate2
Parameter Sets: (All)
Aliases: cert
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -OutLoggerVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
This variable includes a pair of methods - ToHTML and ToXML - that can then be used to save that output to either an HTML or an XML file.

To store output in a logger variable named $TestOutput use the following syntax:

`-OutLoggerVariable TestOutput`

Note: Do not use prepend a $ character when specifying the variable name.

To save the information stored in the logger variable to an HTML file, use a command similar to this:

`$TestOutput.ToHTML() \> C:\Logs\TestOutput.html`

To save the information stored in the logger variable to an XML file, use a command similar to this:

`$TestOutput.ToXML() \> C:\Logs\TestOutput.xml`

```yaml
Type: String
Parameter Sets: (All)
Aliases: olv
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutVerboseVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax

`-OutVerboseVariable TestOutput`

Do not prepend a $ character when specifying the variable name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
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
The `Test-CsMcxPushNotification` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsMcxPushNotification` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS
