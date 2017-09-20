---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsSipResponseCodeTranslationRule

## SYNOPSIS
Creates a new SIP response code translation rule.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
New-CsSipResponseCodeTranslationRule [-Identity] <XdsIdentity> -TranslatedResponseCode <Int32>
 [-Priority <Int32>] [-ReceivedResponseCode <Int32>] [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [-ReceivedISUPCauseValue <Int32>] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsSipResponseCodeTranslationRule -TranslatedResponseCode <Int32> -Name <String> -Parent <String>
 [-Priority <Int32>] [-ReceivedResponseCode <Int32>] [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [-ReceivedISUPCauseValue <Int32>] [<CommonParameters>]
```

## DESCRIPTION
SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Skype for Business Server, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts that code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Skype for Business Server uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the use of the malfunctioning gateway and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Skype for Business Server.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that cause code is available) to a SIP response code used by Skype for Business Server.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Skype for Business Server will not attempt to find a new gateway in order to complete the call.

For Skype for Business Server, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Skype for Business Server; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.
These new translation rules are created by using the `New-CsSipResponseCodeTranslationRule` cmdlet.
Translation rules can be assigned to the global scope, the site scope, or to the service scope (for the PSTN Gateway service only).


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404" -ReceivedResponseCode 434 -TranslatedResponseCode 404
```

The command shown in Example 1 creates a new SIP response code translation rule with the Identity PstnGateway:192.168.0.240/Rule404.
This rule translates a received response code of 434 to the standard SIP response code 404 (Not Found).


### -------------------------- Example 2 ------------------------
```
New-CsSipResponseCodeTranslationRule -Parent "PstnGateway:192.168.0.240" -Name "Rule404" -ReceivedResponseCode 434 -TranslatedResponseCode 404
```

The command shown in Example 2 performs the same task as the command shown in Example 1.
In Example 2, however, the Parent and Name parameters are used instead of the Identity parameter.
This simply shows an alternate way of creating a new SIP response code translation rule that has the Identity PstnGateway:192.168.0.240/Rule404.


## PARAMETERS

### -Identity
Unique identifier for the translation rule to be created.
The identity for a translation rule consists of two parts: the scope where the rule is to be assigned and the name to be given to the rule.
For example, a translation rule named Rule404 to be created at the global scope would have an Identity that looks like this: global/Rule404.

Instead of using the Identity parameter, you can use the Parent and Name parameters when creating a new translation rule.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TranslatedResponseCode
Value of the Skype for Business Server SIP response code that the ReceivedResponseCode and/or the ReceivedISUPCauseCode should be translated to.
Translated response codes can be any integer value between 400 and 699, inclusive.


```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Name used to differentiate one translation rule from another.
Names must be unique within a given scope; for example, the Redmond site can only have one translation rule named Rule404.
However, you can have a translation rule named Rule404 at the Redmond site and another rule named Rule404 at the Dublin site.

The Name parameter must always be used in conjunction with the Parent parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
Scope where the new translation rule is to be assigned.
To assign a rule to the global scope, use this syntax:

`-Parent global`

To assign a rule to the site scope, use syntax like this:

`-Parent site:Redmond`

To assign a rule to the service scope, use syntax similar to this:

`-Parent PstnGateway:192.168.0.242`

The Parent parameter must always be used in conjunction with the Name parameter.


```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Relative priority of the translation rule.
Rules are processed in order of their assigned priority; the first rule to be processed has a priority of 0; the second rule to be processed has a priority of 1 and so on.
If not specified the new rule will be given the lowest priority in its scope.

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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.


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

### -ReceivedISUPCauseValue
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
None.
The `New-CsSipResponseCodeTranslationRule` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `New-CsSipResponseCodeTranslationRule` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTRanslationRule#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsSipResponseCodeTranslationRule]()

[Remove-CsSipResponseCodeTranslationRule]()

[Set-CsSipResponseCodeTranslationRule]()
