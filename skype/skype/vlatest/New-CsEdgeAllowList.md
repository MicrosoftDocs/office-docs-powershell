---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# New-CsEdgeAllowList

## SYNOPSIS
Enables administrators to specify the domains that their users will be allowed to communicate with.
The New-CsEdgeAllowList cmdlet, which can be used only with Skype for Business Online, must be used in conjunction with the New-CsEdgeDomainPattern cmdlet and the Set-CsTenantFederationConfiguration cmdlet.

## SYNTAX

```
New-CsEdgeAllowList [-AllowedDomain <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Federation is a service that enables users to exchange IM and presence information with users from other domains.
With Skype for Business Online, administrators can use the federation configuration settings to govern:

Whether or not users can communicate with people from other domains and, if so, which domains they are allowed to communicate with.

Whether or not users can communicate with people who have accounts on public IM and presence providers such as Windows Live, AOL, and Yahoo

Federation is managed, in part, by using allowed domain and blocked domain lists.
The allowed domain list specifies the domains that users are allowed to communicate with; the blocked domain list specifies the domains that users are not allowed to communicate with.
By default, users can communicate with any domain that does not appear on the blocked list.
However, administrators can modify this default setting and limit communication to domains that are on the allowed domains list.

Skype for Business Online does not allow you to directly modify the allowed list or the blocked list; for example, you cannot use a command similar to this one, which passes a string value representing a domain name to the allowed domains list:

Set-CsTenantFederationConfiguration -AllowedDomains "fabrikam.com"

Instead, you must use either the New-CsEdgeAllowAllKnownDomains cmdlet or the New-CsEdgeAllowList cmdlet to create a domain object and then pass that domain object to the Set-CsTenantFederationConfiguration cmdlet.
The New-CsEdgeAllowAllKnownDomains cmdlet is used if you want to allow users to communicate with all domains except for those expressly specified on the blocked domains list.
The New-CsEdgeAllowList cmdlet is used if you want to limit user communication to a specified collection of domains.
In that case, users will only be allowed to communicate with domains that appear on the allowed domains list.

To add a single domain (fabrikam.com) to the allowed domain list, you need to use a set of command similar to these:

$x = New-CsEdgeDomainPattern -Domain "fabrikam.com"

$newAllowList = New-CsEdgeAllowList -AllowedDomain $x

Set-CsTenantFederationConfiguration -AllowedDomains $newAllowList

When this command finishes executing, users will only be allowed to communicate with users from fabrikam.com domain.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

The commands shown in Example 1 assign the domain fabrikam.com to the allowed domains list for the tenant with the TenantId "bf19b7db-6960-41e5-a139-2aa373474354".
To do this, the first command in the example uses the New-CsEdgeDomainPattern cmdlet to create a domain object for fabrikam.com; this object is stored in a variable named $x.
After the domain object has been created, the New-CsEdgeAllowList cmdlet is used to create a new allowed list containing only the domain fabrikam.com.

With the allowed domain list created, the final command in the example can then use the Set-CsTenantFederationConfiguration cmdlet to configure fabrikam.com as the only domain on the allowed domain list for the current tenant.

$x = New-CsEdgeDomainPattern -Domain "fabrikam.com"

$newAllowList = New-CsEdgeAllowList -AllowedDomain $x

Set-CsTenantFederationConfiguration -AllowedDomains $newAllowList

### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```

```

Example 2 shows how you can add multiple domains to an allowed domains list.
This is done by calling the New-CsEdgeDomainPattern cmdlet multiple times (one for each domain to be added to the list), and storing the resulting domain objects in separate variables.
Each of those variables can then be added to the allow list created by the New-CsEdgeAllowList cmdlet simply by using the AllowedDomain parameter and separating the variables name by using commas:

$newAllowList = New-CsEdgeAllowList -AllowedDomain $x,$y

$x = New-CsEdgeDomainPattern -Domain "contoso.com"

$y = New-CsEdgeDomainPattern -Domain "fabrikam.com"

$newAllowList = New-CsEdgeAllowList -AllowedDomain $x,$y

Set-CsTenantFederationConfiguration -AllowedDomains $newAllowList

### -------------------------- Example 3 -------------------------- (Skype for Business Online)
```

```

In Example 3, all domains are removed from the allowed domains list.
To do this, the first command in the example uses the New-CsEdgeAllowList cmdlet to create a blank list of allowed domains; this is accomplished by setting the AllowedDomain property to a null value ($Null).
The resulting object reference ($newAllowList) is then used in conjunction with the Set-CsTenantFederationConfiguration cmdlet to remove all the domains from the allowed domain list

$newAllowList = New-CsEdgeAllowList -AllowedDomain $Null

Set-CsTenantFederationConfiguration -AllowedDomains $newAllowList

## PARAMETERS

### -AllowedDomain
Object reference to the new domain (or set of domains) to be added to the allowed domain list.
Domain object references must be created by using the New-CsEdgeDomainPattern cmdlet.
Multiple domain objects can be added by separating the object references using commas.
For example:

-AllowedDomain $x,$y

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
The New-CsEdgeAllowList cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsEdgeAllowList cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.AllowList object.

## NOTES

## RELATED LINKS

[New-CsEdgeDomainPattern]()

[Set-CsTenantFederationConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/81bea75c-c8c0-457c-b9eb-8b1c336c22fc(OCS.15).aspx)

