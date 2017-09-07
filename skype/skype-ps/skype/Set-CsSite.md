---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsSite

## SYNOPSIS
Modifies the properties for any of your Skype for Business Server sites.
Sites represent a collection of Skype for Business Server pools and are typically designed around geographic regions.
Skype for Business Server includes two types of sites: data center sites and remote sites (branch office).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsSite [[-Identity] <XdsGlobalRelativeIdentity>] [-Description <String>] [-DisplayName <String>]
 [-FederationRoute <String>] [-WhatIf] [-Confirm] [-Force] [-DefaultPersistentChatPool <String>]
 [-XmppFederationRoute <String>] [<CommonParameters>]
```

## DESCRIPTION
Lync Server 2010 introduced a new concept to the topology: sites.
Sites (which should not be confused with Active Directory sites or Exchange sites) are a collection of Skype for Business Server pools and servers that are typically organized according to geography and network bandwidth.
For example, if all your computers in Redmond are located on the same local area network with high-speed, low-latency connections, you might designate a Redmond site that encompasses those computers.
If your computers in Dublin are located on their own local area network, and share high-speed, low-latency connections, then you might create a separate Dublin site as well.
Sites also play a key role in Skype for Business Server management: many policies and settings can be configured at the site scope, making it easy to do such things as apply one set of dial plans to users in Redmond and a different set of dial plans to users in Dublin.

Sites are created by using Topology Builder and any changes to the site infrastructure (for example, adding new pools) must also be made by using Topology Builder.
However, you can use the `Set-CsSite` cmdlet to change the display name, the description and the federation route of any site in your organization.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsSite -Identity Redmond -Description "Full-time employees in Redmond, WA."
```

The command shown in Example 1 modifies the Description property for the Redmond site (-Identity Redmond).


### -------------------------- Example 2 ------------------------
```
Set-CsSite -Identity Redmond -DisplayName "US Headquarters"
```

Example 2 changes the display name for the Redmond site to "US Headquarters".


### -------------------------- Example 3 ------------------------
```
Get-CsSite | Where-Object {$_.Description -eq $Null} | ForEach-Object {Set-CsSite $_.Identity -Description "Litwareinc.com"}
```

The command shown in Example 3 locates all the sites that do not have a Description and then assigns each of those sites the generic description "Litwareinc.com." To do this, the command first calls the `Get-CsSite` cmdlet without any parameters in order to return a collection of all the Skype for Business Server sites.
The returned collection is then piped to the `Where-Object` cmdlet, which picks out only those sites where the Description property is equal to (-eq) a null value ($Null).
These sites are then piped to the `ForEach-Object` cmdlet.
This cmdlet takes each item in the collection and uses the `Set-CsSite` cmdlet to modify the value of the Description property.


## PARAMETERS

### -Identity
Name of the site to be modified; for example:

`-Identity "Redmond"`

Do not use the format "site:Redmond" when specifying the identity.


```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to add additional information to a site object.
For example, the Description might include contact information for the site.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Friendly name for the site.
For example:

`-DisplayName "North America and South America"`


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FederationRoute
Service location of the Edge Server used to provide a bridge between your internal network and the Internet.
For example:

`-FederationRoute "EdgeServer:atl-edge-001.litwareinc.com"`


```yaml
Type: String
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

### -Force
Suppresses any confirmation prompts or non-fatal error messages that might occur when you run the cmdlet.


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

### -DefaultPersistentChatPool
Fully qualified domain name of the default Persistent Chat pool for the site.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -XmppFederationRoute
Service Identity of the Edge Server used for XMPP (Extensible Messaging and Presence Protocol) federation.
For example:

`-XmppFederationRoute EdgeServer:atl-xmpp-001.litwareinc.com`

```yaml
Type: String
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
The `Set-CsSite` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsSite` cmdlet does not return any objects or values.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.Deploy.Internal.Site+CentralSite object.

## NOTES

## RELATED LINKS

[Get-CsSite]()
