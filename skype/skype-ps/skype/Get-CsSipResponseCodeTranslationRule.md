---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsSipResponseCodeTranslationRule
schema: 2.0.0
---

# Get-CsSipResponseCodeTranslationRule

## SYNOPSIS
Returns information about SIP response code translation rules.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsSipResponseCodeTranslationRule [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsSipResponseCodeTranslationRule [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Skype for Business Server, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts the code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Skype for Business Serve uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the use of the malfunctioning gateway, and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Skype for Business Server.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that code is available) to a SIP response code used by Skype for Business Server.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Skype for Business Server will not attempt to find a new gateway in order to complete the call.

For Skype for Business Server, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Skype for Business Server; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.

The Get-CsSipResponseCodeTranslationRule cmdlet enables you to retrieve information about all the translation rules configured for use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsSipResponseCodeTranslationRule
```

The command shown in Example 1 returns a collection of all the response code translation rules configured for use in your organization.
This is done by calling the Get-CsSipResponseCodeTranslationRule cmdlet without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404"
```

Example 2 returns a single response code translation rule: the rule with the Identity PstnGateway:192.168.0.240/Rule404.

### -------------------------- Example 3 --------------------------
```
Get-CsSipResponseCodeTranslationRule -Filter "site:*"
```

In Example 3, the Filter parameter is used to limit the returned data to all the response code translation rules configured at the site scope.
The filter value "site:*" limits the returned data to rules that have an Identity that begins with the string value "site:".

### -------------------------- Example 4 --------------------------
```
Get-CsSipResponseCodeTranslationRule | Where-Object {$_.ReceivedISUPCauseValue -eq -1}
```

The command shown in Example 4 returns a collection of all the response code translation rules where no value has been configured for the ReceivedISUPCauseValue property.
To do this, the command first calls the Get-CsSipResponseCodeTranslationRule cmdlet without any parameters in order to return a collection of all the response code translation rules currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those rules where the ReceivedISUPCauseValue property is equal to -1.



## PARAMETERS

### -Identity
Unique identifier for the translation rule.
The identity for a translation rule consists of two parts: the scope where the rule was configured, and the name given to the rule when it was created.
For example, a translation rule named Rule404 that was created at the global scope would have an Identity that looked like this: global/Rule404.

In addition to the global scope, translation rules can also be created at the site scope or the service scope (albeit for the PstnGateway service only).

To return all the translation rules created for a particular site or service, you can simply specify the site or service Identity.
For example:

`-Identity "site:Redmond"`

If this parameter is omitted, the Get-CsSipResponseCodeTranslationRule cmdlet returns a collection of all your SIP response code translation rules.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards when specifying the translation rule (or rules) to be returned.
For example, this syntax returns all the translation rules that have the string value "404" in their Identity:

-Filter "*404*"

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the SIP response code translation rule data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTRanslationRule#Decorated


## NOTES


## RELATED LINKS

[New-CsSipResponseCodeTranslationRule](New-CsSipResponseCodeTranslationRule.md)

[Remove-CsSipResponseCodeTranslationRule](Remove-CsSipResponseCodeTranslationRule.md)

[Set-CsSipResponseCodeTranslationRule](Set-CsSipResponseCodeTranslationRule.md)

