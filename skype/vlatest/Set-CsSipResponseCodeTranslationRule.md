---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsSipResponseCodeTranslationRule

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies an existing SIP response code translation rule.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Modifies an existing SIP response code translation rule.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Modifies an existing SIP response code translation rule.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsSipResponseCodeTranslationRule [[-Identity] <XdsIdentity>] [-TranslatedResponseCode <Int32>]
 [-Priority <Int32>] [-ReceivedResponseCode <Int32>] [-Force] [-WhatIf] [-Confirm]
 [-ReceivedISUPCauseValue <Int32>] [<CommonParameters>]
```

### Instance
```
Set-CsSipResponseCodeTranslationRule [-TranslatedResponseCode <Int32>] [-Priority <Int32>]
 [-ReceivedResponseCode <Int32>] [-Force] [-WhatIf] [-Confirm] [-Instance <PSObject>]
 [-ReceivedISUPCauseValue <Int32>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Lync Server 2010, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts that code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Lync Server uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the user of the malfunctioning gateway, and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Lync Server.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that code is available) to a SIP response code used by Lync Server.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Lync Server will not attempt to find a new gateway in order to complete the call.

For Lync Server, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Lync Server; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.

The Set-CsSipResponseCodeTranslationRule provides a way for you to modify any of the translation rules previously configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsSipResponseCodeTranslationRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsSipResponseCodeTranslationRule"}

**Below Content Applies To:** Lync Server 2013

SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Lync Server, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts that code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Lync Server uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the use of the malfunctioning gateway, and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Lync Server.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that code is available) to a SIP response code used by Lync Server.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Lync Server will not attempt to find a new gateway in order to complete the call.

For Lync Server, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Lync Server; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.

The Set-CsSipResponseCodeTranslationRule provides a way for you to modify any of the translation rules previously configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsSipResponseCodeTranslationRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsSipResponseCodeTranslationRule"}

**Below Content Applies To:** Skype for Business Server 2015

SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Skype for Business Server 2015, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts that code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Skype for Business Server 2015 uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the use of the malfunctioning gateway, and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Skype for Business Server 2015.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that code is available) to a SIP response code used by Skype for Business Server 2015.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Skype for Business Server 2015 will not attempt to find a new gateway in order to complete the call.

For Skype for Business Server 2015, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Skype for Business Server 2015; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.

The Set-CsSipResponseCodeTranslationRule cmdlet provides a way for you to modify any of the translation rules previously configured for use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404" -ReceivedISUPCauseValue 477
```

The command shown in Example 1 modifies the ReceivedISUPCauseValue property for the translation rule with the Identity PstnGateway:192.168.0.240/Rule404.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies the ReceivedISUPCauseValue property for the translation rule with the Identity PstnGateway:192.168.0.240/Rule404.

Set-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404" -ReceivedISUPCauseValue 477

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies the ReceivedISUPCauseValue property for the translation rule with the Identity PstnGateway:192.168.0.240/Rule404.

Set-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404" -ReceivedISUPCauseValue 477

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Set-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404" -Priority 0
```

In Example 2, the translation rule with the Identity PstnGateway:192.168.0.240/Rule404 is marked as the highest priority rule; that is, the rule that will be processed first.
This is done by setting the Priority to 0.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the translation rule with the Identity PstnGateway:192.168.0.240/Rule404 is marked as the highest priority rule; that is, the rule that will be processed first.
This is done by setting the Priority to 0.

Set-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404" -Priority 0

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the translation rule with the Identity PstnGateway:192.168.0.240/Rule404 is marked as the highest priority rule; that is, the rule that will be processed first.
This is done by setting the Priority to 0.

Set-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404" -Priority 0

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsSipResponseCodeTranslationRule | Set-CsSipResponseCodeTranslationRule -ReceivedISUPCauseValue -1
```

Example 3 shows how you can set the ReceivedISUPCauseValue property of all the translation rules configured for use in your organization to -1; that will cause the ISUP cause code to be ignored when translating rules.
To do this the command first calls Get-CsSipResponseCodeTranslationRule without any parameters in order to return a collection of all the SIP response code translation rules currently in use.
That collection is then piped to the Set-CsSipResponseCodeTranslationRule cmdlet, which modifies the ReceivedISUPCauseValue property for each item in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows how you can set the ReceivedISUPCauseValue property of all the translation rules configured for use in your organization to -1; that will cause the ISUP cause code to be ignored when translating rules.
To do this the command first calls Get-CsSipResponseCodeTranslationRule without any parameters in order to return a collection of all the SIP response code translation rules currently in use.
That collection is then piped to the Set-CsSipResponseCodeTranslationRule cmdlet, which modifies the ReceivedISUPCauseValue property for each item in the collection.

Get-CsSipResponseCodeTranslationRule | Set-CsSipResponseCodeTranslationRule -ReceivedISUPCauseValue -1

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows how you can set the ReceivedISUPCauseValue property of all the translation rules configured for use in your organization to -1; that will cause the ISUP cause code to be ignored when translating rules.
To do this the command first calls the Get-CsSipResponseCodeTranslationRule cmdlet without any parameters in order to return a collection of all the SIP response code translation rules currently in use.
That collection is then piped to the Set-CsSipResponseCodeTranslationRule cmdlet, which modifies the ReceivedISUPCauseValue property for each item in the collection.

Get-CsSipResponseCodeTranslationRule | Set-CsSipResponseCodeTranslationRule -ReceivedISUPCauseValue -1

## PARAMETERS

### -Identity
Unique identifier for the translation rule to be modified.
The Identity for a translation rule consists of two parts: the scope where the rule was configured, and the name given to the rule when it was created.
For example, a translation rule named Rule404 that was created at the global scope would have an Identity that looked like this: global/Rule404.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TranslatedResponseCode
Value of SIP response code that the ReceivedResponseCode and/or the ReceivedISUPCauseCode should be translated to.
Translated response codes can be any integer value between 400 and 699, inclusive.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Relative priority of the translation rule.
Rules are processed in order of their assigned priority; the first rule to be processed has a priority of 0; the second rule to be processed has a priority of 1; and so on.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReceivedResponseCode
Value of the SIP response code used by a gateway when responding to an INVITE message.
A response code can be any integer value between 400 and 699, inclusive.
Although the cmdlet will accept integer values less than 400, these are not recognized as final responses.
As a result, the translation rule will never be used.
A value of 0 means that only the ISUP cause code will be used when executing the translation rule; the SIP response code will be ignored.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
**Below Content Applies To:** Lync Server 2010

{{Fill Instance Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.



```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ReceivedISUPCauseValue
**Below Content Applies To:** Lync Server 2010

{{Fill ReceivedISUPCauseValue Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Value of the ISDN User Part (ISUP) code that must be present in the SIP response message used by a gateway when responding to an INVITE message.
A value of -1 indicates that only the SIP response code will be used when executing the translation rule; the ISUP cause code will be ignored.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTranslationRule#Decorated object.
Set-CsSipResponseCodeTranslationRule accepts pipelined instances of the SIP response code translation rule object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTranslationRule#Decorated object.
The Set-CsSipResponseCodeTranslationRule cmdlet accepts pipelined instances of the SIP response code translation rule object.

## OUTPUTS

###  
Set-CsSipResponseCodeTranslationRule does not return any objects or values.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTranslationRule#Decorated object.

###  
The Set-CsSipResponseCodeTranslationRule cmdlet does not return any objects or values.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTranslationRule#Decorated object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/3ce2fafe-9c79-4462-9f24-c2a30502e641(OCS.14).aspx)

[Get-CsSipResponseCodeTranslationRule]()

[New-CsSipResponseCodeTranslationRule]()

[Remove-CsSipResponseCodeTranslationRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/3ce2fafe-9c79-4462-9f24-c2a30502e641(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3ce2fafe-9c79-4462-9f24-c2a30502e641(OCS.16).aspx)

