---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsSipResponseCodeTranslationRule

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about SIP response code translation rules.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Microsoft Lync Server 2010.

Below Content Applies To: Lync Server 2013

Returns information about SIP response code translation rules.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Lync Server.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information about SIP response code translation rules.
These rules enable administrators to map SIP response codes with values between 400 and 699 to the values used by Skype for Business Server 2015.
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
Below Content Applies To: Lync Server 2010

SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Lync Server 2010, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts the code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Lync Server uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the user of the malfunctioning gateway, and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Lync Server 2010.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that code is available) to a SIP response code used by Lync Server.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Lync Server will not attempt to find a new gateway in order to complete the call.

For Lync Server, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Lync Server; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.

The Get-CsSipResponseCodeTranslationRule cmdlet enables you to retrieve information about all the translation rules configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsSipResponseCodeTranslationRule cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsSipResponseCodeTranslationRule"}

Below Content Applies To: Lync Server 2013

SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Lync Server, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts the code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Lync Server uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the use of the malfunctioning gateway, and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Lync Server.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that code is available) to a SIP response code used by Lync Server.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Lync Server will not attempt to find a new gateway in order to complete the call.

For Lync Server, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Lync Server; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.

The Get-CsSipResponseCodeTranslationRule cmdlet enables you to retrieve information about all the translation rules configured for use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsSipResponseCodeTranslationRule cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsSipResponseCodeTranslationRule"}

Below Content Applies To: Skype for Business Server 2015

SIP trunking provides a way to connect a Voice over Internet Protocol (VoIP) network (such as Enterprise Voice) with the public switched telephone network (PSTN).
In Skype for Business Server 2015, the Mediation Server uses trunking peers to interact with the PSTN network.
When an outgoing call fails on the PSTN network, an ISDN User Part (ISUP) cause code is automatically generated.
For example, a PSTN gateway might send cause code 34 to indicate that no circuit or channel was available for completing the call.
When a Mediation Server trunking peer receives that ISUP cause code, it converts the code to a SIP response code, which is then sent to the Mediation Server itself.
In turn, Skype for Business Server 2015 uses these response codes to make its outbound routing decisions.
For example, a malfunctioning gateway might automatically be assigned a "less-preferred" status; this minimizes the use of the malfunctioning gateway, and thus maximizes the chance of a call being successfully completed.

However, not all gateways use the recommended ISUP cause code to SIP response code mapping used by Skype for Business Server 2015.
For these gateways, administrators can use the CsSipResponseCodeTranslationRule cmdlets to map the gateway SIP response code (in combination with the ISUP cause code, if that code is available) to a SIP response code used by Skype for Business Server 2015.
For example, a gateway might map ISUP cause code 34 ("No circuit/channel is available") to SIP response code 486 ("Busy here").
Based on a response code of 486, the outbound routing logic of Skype for Business Server 2015 will not attempt to find a new gateway in order to complete the call.

For Skype for Business Server 2015, however, that SIP response code of 486 should instead be mapped to SIP response code 503.
A response code of 503 triggers the retry mechanism in the outbound routing logic of Skype for Business Server 2015; that means that the system will try to find another gateway in order to complete the call.
To handle this situation, you can create a translation rule that maps the combination of ISUP cause code 34 and SIP response code 486 to a SIP response code of 503.

The Get-CsSipResponseCodeTranslationRule cmdlet enables you to retrieve information about all the translation rules configured for use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsSipResponseCodeTranslationRule
```

The command shown in Example 1 returns a collection of all the response code translation rules configured for use in your organization.
This is done by calling Get-CsSipResponseCodeTranslationRule without any parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns a collection of all the response code translation rules configured for use in your organization.
This is done by calling Get-CsSipResponseCodeTranslationRule without any parameters.

Get-CsSipResponseCodeTranslationRule

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the response code translation rules configured for use in your organization.
This is done by calling the Get-CsSipResponseCodeTranslationRule cmdlet without any parameters.

Get-CsSipResponseCodeTranslationRule

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404"
```

The preceding command returns a single response code translation rule: the rule with the Identity PstnGateway:192.168.0.240/Rule404.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns a single response code translation rule: the rule with the Identity PstnGateway:192.168.0.240/Rule404.

Get-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns a single response code translation rule: the rule with the Identity PstnGateway:192.168.0.240/Rule404.

Get-CsSipResponseCodeTranslationRule -Identity "PstnGateway:192.168.0.240/Rule404"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsSipResponseCodeTranslationRule -Filter "site:*"
```

In Example 3, the Filter parameter is used to limit the returned data to all the response code translation rules configured at the site scope.
The filter value "site:*" limits the returned data to rules that have an Identity that begins with the string value "site:".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the Filter parameter is used to limit the returned data to all the response code translation rules configured at the site scope.
The filter value "site:*" limits the returned data to rules that have an Identity that begins with the string value "site:".

Get-CsSipResponseCodeTranslationRule -Filter "site:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Filter parameter is used to limit the returned data to all the response code translation rules configured at the site scope.
The filter value "site:*" limits the returned data to rules that have an Identity that begins with the string value "site:".

Get-CsSipResponseCodeTranslationRule -Filter "site:*"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsSipResponseCodeTranslationRule | Where-Object {$_.ReceivedISUPCauseValue -eq -1}
```

The command shown in Example 4 returns a collection of all the response code translation rules where no value has been configured for the ReceivedISUPCauseValue property.
To do this, the command first calls Get-CsSipResponseCodeTranslationRule without any parameters in order to return a collection of all the response code translation rules currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those rules where the ReceivedISUPCauseValue property is equal to -1.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns a collection of all the response code translation rules where no value has been configured for the ReceivedISUPCauseValue property.
To do this, the command first calls Get-CsSipResponseCodeTranslationRule without any parameters in order to return a collection of all the response code translation rules currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those rules where the ReceivedISUPCauseValue property is equal to -1.

Get-CsSipResponseCodeTranslationRule | Where-Object {$_.ReceivedISUPCauseValue -eq -1}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns a collection of all the response code translation rules where no value has been configured for the ReceivedISUPCauseValue property.
To do this, the command first calls the Get-CsSipResponseCodeTranslationRule cmdlet without any parameters in order to return a collection of all the response code translation rules currently in use.
That collection is then piped to the Where-Object cmdlet, which picks out only those rules where the ReceivedISUPCauseValue property is equal to -1.

Get-CsSipResponseCodeTranslationRule | Where-Object {$_.ReceivedISUPCauseValue -eq -1}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier for the translation rule.
The identity for a translation rule consists of two parts: the scope where the rule was configured, and the name given to the rule when it was created.
For example, a translation rule named Rule404 that was created at the global scope would have an Identity that looked like this: global/Rule404.

In addition to the global scope, translation rules can also be created at the site scope or the service scope (albeit for the PstnGateway service only).

To return all the translation rules created for a particular site or service, you can simply specify the site or service Identity.
For example:

-Identity "site:Redmond"

If this parameter is omitted, Get-CsSipResponseCodeTranslationRule returns a collection of all your SIP response code translation rules.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the translation rule.
The identity for a translation rule consists of two parts: the scope where the rule was configured, and the name given to the rule when it was created.
For example, a translation rule named Rule404 that was created at the global scope would have an Identity that looked like this: global/Rule404.

In addition to the global scope, translation rules can also be created at the site scope or the service scope (albeit for the PstnGateway service only).

To return all the translation rules created for a particular site or service, you can simply specify the site or service Identity.
For example:

-Identity "site:Redmond"

If this parameter is omitted, the Get-CsSipResponseCodeTranslationRule cmdlet returns a collection of all your SIP response code translation rules.



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

### -Filter
Enables you to use wildcards when specifying the translation rule (or rules) to be returned.
For example, this syntax returns all the translation rules that have the string value "404" in their Identity:

-Filter "*404*"

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Below Content Applies To: Lync Server 2010

Retrieves the SIP response code translation rule data from the local replica of the  Central Management store rather than from the Central Management store itself.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves the SIP response code translation rule data from the local replica of the Central Management store rather than from the Central Management store itself.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsSipResponseCodeTranslationRule does not accept pipelined input.

###  
None.
The Get-CsSipResponseCodeTranslationRule cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsSipResponseCodeTranslationRule returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTRanslationRule#Decorated object.

###  
The Get-CsSipResponseCodeTranslationRule cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.SipResponseCodeTRanslationRule#Decorated object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/075e9e85-8f85-402c-9256-4e73ec93f96b(OCS.14).aspx)

[New-CsSipResponseCodeTranslationRule]()

[Remove-CsSipResponseCodeTranslationRule]()

[Set-CsSipResponseCodeTranslationRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/075e9e85-8f85-402c-9256-4e73ec93f96b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/075e9e85-8f85-402c-9256-4e73ec93f96b(OCS.16).aspx)

