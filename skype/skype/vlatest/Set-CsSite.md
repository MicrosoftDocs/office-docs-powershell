---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsSite

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies the properties for any of your Microsoft Lync Server 2010 sites.
Sites represent a collection of Lync Server 2010 pools and are typically designed around geographic regions.
Lync Server includes two types of sites: data center sites and remote sites (branch office).

**Below Content Applies To:** Lync Server 2013

Modifies the properties for any of your Lync Server sites.
Sites represent a collection of Lync Server pools and are typically designed around geographic regions.
Lync Server includes two types of sites: data center sites and remote sites (branch office).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Modifies the properties for any of your Skype for Business Server 2015 sites.
Sites represent a collection of Skype for Business Server 2015 pools and are typically designed around geographic regions.
Skype for Business Server 2015 includes two types of sites: data center sites and remote sites (branch office).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsSite [[-Identity] <XdsGlobalRelativeIdentity>] [-Description <String>] [-DisplayName <String>]
 [-FederationRoute <String>] [-WhatIf] [-Confirm] [-Force] [-DefaultPersistentChatPool <String>]
 [-XmppFederationRoute <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync Server 2010 introduces a new concept to the Lync Server topology: sites.
Sites (which should not be confused with Active Directory sites or Microsoft Exchange Server sites) are a collection of Lync Server pools and servers that are typically organized according to geography and network bandwidth.
For example, if all your computers in Redmond are located on the same local area network with high-speed, low-latency connections, you might designate a Redmond site that encompasses those computers.
If your computers in Dublin are located on their own local area network, and share high-speed, low-latency connections, then you might create a separate Dublin site as well.
Sites also play a key role in Lync Server management: many policies and settings can be configured at the site scope, making it easy to do such things as apply one set of dial plans to users in Redmond and a different set of dial plans to users in Dublin.

Sites are created by using Topology Builder, and any changes to the site infrastructure (for example, adding new pools) must also be made by using Topology Builder.
However, you can use the Set-CsSite cmdlet to change the display name, the description, and the federation route of any site in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsSite cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsSite"}

**Below Content Applies To:** Lync Server 2013

Lync Server 2010 introduced a new concept to the Lync Server topology: sites.
Sites (which should not be confused with Active Directory sites or Microsoft Exchange Server sites) are a collection of Lync Server pools and servers that are typically organized according to geography and network bandwidth.
For example, if all your computers in Redmond are located on the same local area network with high-speed, low-latency connections, you might designate a Redmond site that encompasses those computers.
If your computers in Dublin are located on their own local area network, and share high-speed, low-latency connections, then you might create a separate Dublin site as well.
Sites also play a key role in Lync Server management: many policies and settings can be configured at the site scope, making it easy to do such things as apply one set of dial plans to users in Redmond and a different set of dial plans to users in Dublin.

Sites are created by using Topology Builder, and any changes to the site infrastructure (for example, adding new pools) must also be made by using Topology Builder.
However, you can use the Set-CsSite cmdlet to change the display name, the description, and the federation route of any site in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsSite cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsSite"}

**Below Content Applies To:** Skype for Business Server 2015

Lync Server 2010 introduced a new concept to the topology: sites.
Sites (which should not be confused with Active Directory sites or Exchange sites) are a collection of Skype for Business Server 2015 pools and servers that are typically organized according to geography and network bandwidth.
For example, if all your computers in Redmond are located on the same local area network with high-speed, low-latency connections, you might designate a Redmond site that encompasses those computers.
If your computers in Dublin are located on their own local area network, and share high-speed, low-latency connections, then you might create a separate Dublin site as well.
Sites also play a key role in Skype for Business Server 2015 management: many policies and settings can be configured at the site scope, making it easy to do such things as apply one set of dial plans to users in Redmond and a different set of dial plans to users in Dublin.

Sites are created by using Topology Builder, and any changes to the site infrastructure (for example, adding new pools) must also be made by using Topology Builder.
However, you can use the Set-CsSite cmdlet to change the display name, the description, and the federation route of any site in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsSite -Identity Redmond -Description "Full-time employees in Redmond, WA."
```

The command shown in Example 1 modifies the Description property for the Redmond site (-Identity Redmond).

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies the Description property for the Redmond site (-Identity Redmond).

Set-CsSite -Identity Redmond -Description "Full-time employees in Redmond, WA."

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies the Description property for the Redmond site (-Identity Redmond).

Set-CsSite -Identity Redmond -Description "Full-time employees in Redmond, WA."

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Set-CsSite -Identity Redmond -DisplayName "US Headquarters"
```

The preceding command changes the display name for the Redmond site to "US Headquarters".

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 changes the display name for the Redmond site to "US Headquarters".

Set-CsSite -Identity Redmond -DisplayName "US Headquarters"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 changes the display name for the Redmond site to "US Headquarters".

Set-CsSite -Identity Redmond -DisplayName "US Headquarters"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsSite | Where-Object {$_.Description -eq $Null} | ForEach-Object {Set-CsSite $_.Identity -Description "Litwareinc.com"}
```

The command shown in Example 3 locates all the sites that do not have a Description, and then assigns each of those sites the generic description "Litwareinc.com." To do this, the command first calls Get-CsSite without any parameters in order to return a collection of all the Lync Server sites.
The returned collection is then piped to the Where-Object cmdlet, which picks out only those sites where the Description property is equal to (-eq) a null value ($Null).
These sites are then piped to the ForEach-Object cmdlet.
This cmdlet takes each item in the collection and uses Set-CsSite to modify the value of the Description property.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 locates all the sites that do not have a Description, and then assigns each of those sites the generic description "Litwareinc.com." To do this, the command first calls Get-CsSite without any parameters in order to return a collection of all the Lync Server sites.
The returned collection is then piped to the Where-Object cmdlet, which picks out only those sites where the Description property is equal to (-eq) a null value ($Null).
These sites are then piped to the ForEach-Object cmdlet.
This cmdlet takes each item in the collection and uses Set-CsSite to modify the value of the Description property.

Get-CsSite | Where-Object {$_.Description -eq $Null} | ForEach-Object {Set-CsSite $_.Identity -Description "Litwareinc.com"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 locates all the sites that do not have a Description, and then assigns each of those sites the generic description "Litwareinc.com." To do this, the command first calls the Get-CsSite cmdlet without any parameters in order to return a collection of all the Skype for Business Server 2015 sites.
The returned collection is then piped to the Where-Object cmdlet, which picks out only those sites where the Description property is equal to (-eq) a null value ($Null).
These sites are then piped to the ForEach-Object cmdlet.
This cmdlet takes each item in the collection and uses the Set-CsSite cmdlet to modify the value of the Description property.

Get-CsSite | Where-Object {$_.Description -eq $Null} | ForEach-Object {Set-CsSite $_.Identity -Description "Litwareinc.com"}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Name of the site to be modified; for example: -Identity "Redmond".
Do not use the format "site:Redmond" when specifying the identity.



**Below Content Applies To:** Skype for Business Server 2015

Name of the site to be modified; for example:

-Identity "Redmond"

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Friendly name for the site.
For example: -DisplayName "North America and South America".



**Below Content Applies To:** Skype for Business Server 2015

Friendly name for the site.
For example:

-DisplayName "North America and South America"



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Service location of the Edge Server used to provide a bridge between your internal network and the Internet.
For example: -FederationRoute "EdgeServer:atl-edge-001.litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

Service location of the Edge Server used to provide a bridge between your internal network and the Internet.
For example:

-FederationRoute "EdgeServer:atl-edge-001.litwareinc.com"



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
**Below Content Applies To:** Lync Server 2010

{{Fill Force Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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

-XmppFederationRoute EdgeServer:atl-xmpp-001.litwareinc.com

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
Set-CsSite does not accept pipelined input.

###  
None.
The Set-CsSite cmdlet does not accept pipelined input.

## OUTPUTS

###  
Set-CsSite does not return any objects or values.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.Deploy.Internal.Site+CentralSite object.

###  
The Set-CsSite cmdlet does not return any objects or values.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.Deploy.Internal.Site+CentralSite object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f4165fdb-5828-4e81-b489-7e263b27e36b(OCS.14).aspx)

[Get-CsSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/f4165fdb-5828-4e81-b489-7e263b27e36b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f4165fdb-5828-4e81-b489-7e263b27e36b(OCS.16).aspx)

