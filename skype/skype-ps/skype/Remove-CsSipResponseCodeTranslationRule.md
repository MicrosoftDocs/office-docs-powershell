---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsSipResponseCodeTranslationRule
schema: 2.0.0
---

# Remove-CsSipResponseCodeTranslationRule

## SYNOPSIS
Removes a SIP response code translation rule.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsSipResponseCodeTranslationRule [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Skype for Business Server, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts that code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Skype for Business Server uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the use of the malfunctioning gateway, and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Skype for Business Server.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that code is available) to a SIP response code used by Skype for Business Server.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Skype for Business Server will not attempt to find a new gateway in order to complete the call.

For Skype for Business Server, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Skype for Business Server; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.

The `Remove-CsSipResponseCodeTranslationRule` cmdlet provides a way for you to delete any of the translation rules previously configured for use in your organization.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404"
```

The command shown in Example 1 deletes a single response code translation rule: the rule that has the Identity PstnGateway:192.168.0.240/Rule404.


### -------------------------- Example 2 ------------------------
```
Get-CsSipResponseCodeTranslationRule -Filter "service:PstnGateway:192.168.0.240/*" | Remove-CsSipResponseTranslationCode
```

In Example 2, all the response code translation rules are removed from the PSTN gateway 192.168.0.240.
To do this, the command first calls the `Get-CsSipResponseCodeTranslationRule` cmdlet along with the Filter parameter; the filter value "service:PstnGateway:192.168.0.240/*" limits the returned data to rules that have an Identity that begins with the string value "service:PstnGateway:192.168.0.240/".
This filtered collection is then piped to the `Remove-CsSipResponseTranslationCode` cmdlet, which deletes each rule in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsSipResponseCodeTranslationRule | Where-Object {$_.ReceivedISUPCauseValue -eq -1} | Remove-CsSipResponseTranslationCode
```

Example 3 deletes all the response code translation rules where no value has been configured for the ReceivedISUPCauseValue property.
To do this, the command first calls the `Get-CsSipResponseCodeTranslationRule` cmdlet without any parameters in order to return a collection of all the response code translation rules currently in use.
That collection is then piped to the `Where-Object` cmdlet, which picks out only those rules where the ReceivedISUPCauseValue property is equal to -1.

From there, the filtered collection is piped to the `Remove-CsSipResponseTranslationCode` cmdlet, which deletes each rule in the collection.


## PARAMETERS

### -Identity
Unique identifier for the translation rule to be removed.
The identity for a translation rule consists of two parts: the scope where the rule was configured and the name given to the rule when it was created.
For example, a translation rule named Rule404 that was created at the global scope would have an Identity that looked like this: global/Rule404.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsSipResponseCodeTranslationRule` cmdlet accepts pipelined instances of the SIP response code translation rule object.

## OUTPUTS

###  
The `Remove-CsSipResponseCodeTranslationRule` cmdlet does not return any objects or values.
Instead, the cmdlet deletes modifies instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTranslationRule#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsSipResponseCodeTranslationRule](Get-CsSipResponseCodeTranslationRule.md)

[New-CsSipResponseCodeTranslationRule](New-CsSipResponseCodeTranslationRule.md)

[Set-CsSipResponseCodeTranslationRule](Set-CsSipResponseCodeTranslationRule.md)

