---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsSimpleUrlConfiguration
schema: 2.0.0
---

# Set-CsSimpleUrlConfiguration

## SYNOPSIS
Modifies an existing simple URL configuration collection.
Simple URLs make it easier for users to join meetings and conferences, as well as making it easier for Administrators to log on to the Skype for Business Server Control Panel.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsSimpleUrlConfiguration [[-Identity] <XdsIdentity>] [-SimpleUrl <PSListModifier>] [-Force]
 [-Tenant <Guid>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsSimpleUrlConfiguration [-Instance <PSObject>] [-SimpleUrl <PSListModifier>] [-Force] [-Tenant <Guid>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
In Microsoft Office Communications Server 2007 R2, meetings had URLs similar to this:

https://imdf.litwareinc.com/Join?uri=sip%3Akenmyer%40litwareinc.com%3Bgruu%3Bopaque%3Dapp%3Aconf%3Afocus%3Aid%3A125f95a0b0184dcea706f1a0191202a8&key=EcznhLh5K5t

However, such URLs are not especially intuitive, and not easy to convey to someone else.
The simple URLs introduced in Microsoft Lync Server 2010 help overcome those problems by providing users with URLs that look more like this:

https://meet.litwareinc.com/kenmyer/071200

Simple URLs are an improvement over the URLs used in Office Communications Server.
However, simple URLs are not automatically created for you; instead, you must configure the URLs yourself.
In addition, you must also do such things as create Domain Name System (DNS) records for each URL; configure reverse proxy rules for external access; add the simple URLs to the your Front End Server certificates and so on.

Skype for Business Server enables you to create three different simple URLs:

Meet - Used for meetings.
You must have at least one Meet URL for each of your SIP domains.

Admin - Used to point administrators to the Skype for Business Server Control Panel.

Dialin - Used for the dial-in conferencing webpage.

Simple URLs are stored in simple URL configuration collections.
When you install Skype for Business Server, a global collection is created for you; you can also create custom collections at the site scope.
This gives you the ability to use different simple URLs at each of your sites.

Simple URL configuration collections are created by using the `New-CsSimpleUrlConfiguration` cmdlet; you can then use additional cmdlets (such as `New-CsSimpleUrl` cmdlet and the `Set-CsSimpleUrlConfiguration` cmdlet) to populate these collections with simple URLs.
After the collections have been created, the `Set-CsSimpleUrlConfiguration` cmdlet also gives you the ability to modify the URLs stored in those collections.

Adding a simple URL to a collection is reasonably straightforward.
To begin with, you use the `New-CsSimpleUrl` cmdlet and the `New-CsSimpleUrlEntry` cmdlet to create an in-memory-only URL.
You then use the Add command to add the new URL to the existing collection.
Alternatively, you can use the Replace method to replace all the existing URLs with the new one.

Removing a URL from a collection is a little more difficult because you must first create a new object reference to that URL (one that mimics the existing URL) and then use that object reference and the Remove method to delete the URL.

After updating a simple URL collection, you must then run the `Enable-CsComputer` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsSimpleUrlConfiguration -Identity "site:Redmond" -SimpleUrl $Null
```

The command shown in Example 1 removes all the simple URLs from the Redmond site, but does not remove the actual collection of simple URLs.
(The collection will still exist, but will no longer contain any URLs). To do this, the command uses the SimpleUrl parameter and sets the parameter value to null ($Null).
This removes all the simple URLs from the collection.


### -------------------------- Example 2 ------------------------
```
$urlEntry = New-CsSimpleUrlEntry -Url "https://meet.fabrikam.com"

$simpleUrl = New-CsSimpleUrl -Component "meet" -Domain "fabrikam.com" -SimpleUrlEntry $urlEntry -ActiveUrl "https://meet.fabrikam.com"

Set-CsSimpleUrlConfiguration -Identity "site:Redmond" -SimpleUrl @{Add=$simpleUrl}
```

Example 2 shows how a new URL can be added to an existing collection of simple URLs.
To begin with, the first command in the example uses the `New-CsSimpleUrlEntry` cmdlet to create a URL entry that points to https://meet.fabrikam.com; this URL entry is stored in a variable named $urlEntry.

In the second command, the `New-CsSimpleUrl` cmdlet is used to create an in-memory-only instance of a simple URL.
In this example, the URL Component is set to Meet; the domain is set to fabrikam.com; the ActiveUrl is set to https://meet.fabrikam.com and the SimpleUrl property is set to $urlEntry, with $urlEntry being the URL entry created in the first command.

After the URL has been created (and stored in the object reference $simpleUrl) the final command in the example adds the new URL to the simple URL collection for the Redmond site.
This is done by using the `Set-CsSimpleUrlConfiguration` cmdlet, the SimpleUrl parameter and the parameter value @{Add=$simpleUrl}.
This syntax causes the URL stored in the object reference $simpleUrl to be added to the SimpleUrl property.


### -------------------------- Example 3 ------------------------
```
$urlEntry = New-CsSimpleUrlEntry -Url "https://fabrikam.vdomain.com"

$simpleUrl = New-CsSimpleUrl -Component "meet" -Domain "fabrikam.com" -SimpleUrlEntry $urlEntry -ActiveUrl "https://meet.fabrikam.com"

Set-CsSimpleUrlConfiguration -Identity "site:Redmond" -SimpleUrl @{Remove=$simpleUrl}
```

The commands shown in Example 3 demonstrate how you can delete a single URL from a simple URL collection.
Because the `Set-CsSimpleUrlConfiguration` cmdlet needs to work with URL objects, the example starts by creating a new object that contains the exact same property values as the URL to be deleted.
To do that, the first command uses the `New-CsSimpleUrlEntry` cmdlet to create a URL entry that points to https://meet.fabrikam.com; this URL entry is stored in a variable named $urlEntry.

After the URL entry has been created, the second command uses the `New-CsSimpleUrl` cmdlet to create an in-memory instance of a simple URL.
In this example, the URL Component is set to Meet; the domain is set to fabrikam.com; the ActiveUrl is set to https://meet.fabrikam.com; and the SimpleUrl property is set to $urlEntry, $urlEntry being the URL entry created in the first command.
This creates an in-memory URL ($simpleUrl) that has the same property values as the URL to be deleted.

The final command in the example then deletes the URL from the simple URL collection for the Redmond site.
This is done by using the `Set-CsSimpleUrlConfiguration` cmdlet, the SimpleUrl parameter and the parameter value @{Remove=$simpleUrl}.
This syntax simply causes the URL stored in the object reference $simpleUrl to be removed from the SimpleUrl property.


## PARAMETERS

### -Identity
Unique identifier for the collection of simple URLs to be modified.
To modify the global collection, use this syntax:

`-Identity global`

To modify a collection from the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

If this parameter is not specified then the global collection will be modified.


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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SimpleUrl
Simple URLs configured for this collection.
These URLs must be created by using the `New-SimpleUrl` cmdlet and the `New-SimpleUrlEntry` cmdlet.


```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose Simple URL configuration settings are to be modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
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
Microsoft.Rtc.Management.WritableConfig.Settings.SimpleUrl.SimpleUrlConfiguration object.
The `Set-CsSimpleUrlConfiguration` cmdlet accepts pipelined instances of the simple URL configuration object.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Get-CsSimpleUrlConfiguration](Get-CsSimpleUrlConfiguration.md)

[New-CsSimpleUrl](New-CsSimpleUrl.md)

[New-CsSimpleUrlConfiguration](New-CsSimpleUrlConfiguration.md)

[New-CsSimpleUrlEntry](New-CsSimpleUrlEntry.md)

[Remove-CsSimpleUrlConfiguration](Remove-CsSimpleUrlConfiguration.md)

