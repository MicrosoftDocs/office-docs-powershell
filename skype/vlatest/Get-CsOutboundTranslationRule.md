---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsOutboundTranslationRule

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves one or more outbound translation rules.
An outbound translation rule converts phone numbers to the local dialing format for interaction with private branch exchange (PBX) systems and public switched telephone network (PSTN) gateways.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves one or more outbound translation rules.
An outbound translation rule converts phone numbers to the local dialing format for interaction with private branch exchange (PBX) systems and public switched telephone network (PSTN) gateways.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsOutboundTranslationRule [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsOutboundTranslationRule [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Call this cmdlet to retrieve an existing outbound translation rule.
Microsoft Lync Server 2010 normalizes phone numbers to E.164 format.
However, many private branch exchange (PBX) systems aren't able to work with this format.
Outbound translations rules translate the number to the local dialing format prior to sending the number to the Mediation Server or gateway.

Each outbound translation rule is associated with a trunk configuration.
More than one outbound translation rule can be associated with each trunk configuration.
Therefore, the Identity for each rule consists of a scope along with a name that is unique within the scope (in the format scope/name, for example site:Redmond/OBR1).
The rule is automatically associated with the trunk configuration with the same scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsOutboundTranslationRule cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsOutboundTranslationRule"}

**Below Content Applies To:** Lync Server 2013

Call this cmdlet to retrieve an existing outbound translation rule.
Lync Server normalizes phone numbers to E.164 format.
However, many private branch exchange (PBX) systems aren't able to work with this format.
Outbound translations rules translate the number to the local dialing format prior to sending the number to the Mediation Server or gateway.

Each outbound translation rule is associated with a trunk configuration.
More than one outbound translation rule can be associated with each trunk configuration.
Therefore, the Identity for each rule consists of a scope along with a name that is unique within the scope (in the format scope/name, for example site:Redmond/OBR1).
The rule is automatically associated with the trunk configuration with the same scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsOutboundTranslationRule cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsOutboundTranslationRule"}

**Below Content Applies To:** Skype for Business Server 2015

Call this cmdlet to retrieve an existing outbound translation rule.
Skype for Business Server 2015 normalizes phone numbers to E.164 format.
However, many private branch exchange (PBX) systems aren't able to work with this format.
Outbound translations rules translate the number to the local dialing format prior to sending the number to the Mediation Server or gateway.

Each outbound translation rule is associated with a trunk configuration.
More than one outbound translation rule can be associated with each trunk configuration.
Therefore, the Identity for each rule consists of a scope along with a name that is unique within the scope (in the format scope/name, for example site:Redmond/OBR1).
The rule is automatically associated with the trunk configuration with the same scope.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsOutboundTranslationRule
```

This example retrieves all outbound translation rules for the Lync Server 2010 deployment.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example retrieves all outbound translation rules for the Lync Server deployment.

Get-CsOutboundTranslationRule

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all outbound translation rules for the Skype for Business Server 2015 deployment.

Get-CsOutboundTranslationRule

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsOutboundTranslationRule -Identity "site:Redmond/Prefix Redmond"
```

This example retrieves a single outbound translation rule: the rule with Identity site:Redmond/Prefix Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example retrieves a single outbound translation rule: the rule with Identity site:Redmond/Prefix Redmond.

Get-CsOutboundTranslationRule -Identity "site:Redmond/Prefix Redmond"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves a single outbound translation rule: the rule with Identity site:Redmond/Prefix Redmond.

Get-CsOutboundTranslationRule -Identity "site:Redmond/Prefix Redmond"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsOutboundTranslationRule -Filter site:*
```

This example retrieves all site-level outbound translation rules.
The command calls Get-CsOutboundTranslationRule with a Filter of site:*, which will return a collection of all rules with Identity values beginning with the string site:.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example retrieves all site-level outbound translation rules.
The command calls Get-CsOutboundTranslationRule with a Filter of site:*, which will return a collection of all rules with Identity values beginning with the string site:.

Get-CsOutboundTranslationRule -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all site-level outbound translation rules.
The command calls the Get-CsOutboundTranslationRule cmdlet with a Filter of site:*, which will return a collection of all rules with Identity values beginning with the string site:.

Get-CsOutboundTranslationRule -Filter site:*

## PARAMETERS

### -Identity
The unique identifier for the outbound translation rule you want to retrieve.
The Identity consists of the scope followed by a unique name within each scope (for example, site:Redmond/OutboundRule1).
Specifying a value for Identity will return at most one outbound translation rule.

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
Performs a wildcard search on Identity that allows you to narrow down your results to only those outbound translation rules whose identities match the given wildcard string.

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
**Below Content Applies To:** Lync Server 2010

Retrieves the outbound translation rule from the local replica of the Central Management store, rather than the Central Management store  itself.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves the outbound translation rule from the local replica of the Central Management store, rather than the Central Management store itself.



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

## OUTPUTS

###  
This cmdlet retrieves one or more objects of type Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TranslationRule.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0564df17-dcca-44e1-9341-15521e0fa14b(OCS.14).aspx)

[New-CsOutboundTranslationRule]()

[Remove-CsOutboundTranslationRule]()

[Set-CsOutboundTranslationRule]()

[Online Version](http://technet.microsoft.com/EN-US/library/0564df17-dcca-44e1-9341-15521e0fa14b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0564df17-dcca-44e1-9341-15521e0fa14b(OCS.16).aspx)

