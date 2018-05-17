---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsTrustedApplication
schema: 2.0.0
---

# Get-CsTrustedApplication

## SYNOPSIS
Retrieves the settings for a trusted application.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsTrustedApplication [[-Identity] <ExternalApplicationIdentity>] [<CommonParameters>]
```

### Filter
```
Get-CsTrustedApplication [-Filter <String>] [<CommonParameters>]
```

### ParentAndRelativeKey
```
Get-CsTrustedApplication [-ApplicationId <String>] [-TrustedApplicationPoolFqdn <String>] [<CommonParameters>]
```

## DESCRIPTION
A trusted application is an application developed by a third party that is given trusted status to run as part of Skype for Business Server but that is not a built-in part of the product.
This cmdlet enables you to retrieve port and Globally Routable User Agent URI (GRUU) settings for one or more trusted applications.

When you use this cmdlet to retrieve a single trusted application, you must supply a value for the Identity parameter.
The Identity is the fully qualified domain name (FQDN) of the pool on which the application is homed followed by a slash (/) followed by the application ID.
For example, TrustPool.litwareinc.com/tapp2, where TrustPool.litwareinc.com is the pool FQDN and tapp2 is the application ID.
Note that when you retrieve an application by calling this cmdlet, you'll see an ID that looks more like this: TrustPool.litwareinc.com/urn:application:tapp2.
Notice the prefix urn:application: before the application name (tapp2).
While this prefix is part of the Identity, it's not required when you specify the value for the Identity parameter.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTrustedApplication
```

This example retrieves information about all trusted applications defined within the Skype for Business Server deployment.

### -------------------------- Example 2 --------------------------
```
Get-CsTrustedApplication -Identity TrustPool.litwareinc.com/tapp2
```

Example 2 retrieves the trusted application with the Identity TrustPool.litwareinc.com/urn:application:tapp2.
Notice that we were able to omit the urn:application: prefix.
The Get-CsTrustedApplication cmdlet adds the prefix automatically and retrieves the correct application.

### -------------------------- Example 3 --------------------------
```
Get-CsTrustedApplication -Filter *trust*
```

Example 3 retrieves all trusted applications that have identities matching the wildcard string specified as the Filter value.
In this case, with a Filter value of *trust*, the command will retrieve all trusted applications with the string "trust" anywhere within the Identity.
This string can be contained within any part of the Identity, the pool FQDN, or the application ID.
So this command will retrieve trusted applications with identities such as TrustedPool.litwareinc.com/urn:application:application1, Pool1.litwareinc.com/urn:application:trustedapp, and Pool1.litwareinc.com/urn:application:trust.

### -------------------------- Example 4 --------------------------
```
Get-CsTrustedApplication -ApplicationId tapp2 -TrustedApplicationPoolFqdn TrustPool.litwareinc.com
```

Example 4 will return the same results as Example 2 (where the Identity was specified as the only parameter).
The only difference between the two examples is that Example 2 retrieves the trusted application based on the Identity, which consists of the trusted pool FQDN followed by the application ID.
In this example, the application ID and trusted pool FQDN are entered as values to two separate parameters: ApplicationId and TrustedApplicationPoolFqdn.

### -------------------------- Example 5 --------------------------
```
Get-CsTrustedApplication | Where-Object {$_.TrustedApplicationPoolFqdn -eq "TrustPool.litwareinc.com"}
```

Example 5 retrieves all the trusted applications on the pool TrustPool.litwareinc.com.
The example begins by calling the Get-CsTrustedApplication cmdlet.
This returns a collection of all trusted applications defined within the Skype for Business Server deployment.
This collection is then piped to the Where-Object cmdlet, which looks through the collection item-by-item to find those with a TrustedApplicationPoolFqdn property value equal to (-eq) TrustPool.litwareinc.com.


## PARAMETERS

### -Identity
The unique identifier of the trusted application you want to retrieve.
Identity values must be entered in the format \<pool FQDN\>/\<application ID\>, where pool FQDN is the FQDN of the pool on which the application resides, and application ID is the name of the application.
Note that if you specify an Identity, you cannot specify an ApplicationID or a TrustedApplicationPoolFqdn.

```yaml
Type: ExternalApplicationIdentity
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
A string that includes wildcards that enables you to retrieve trusted applications based on Identity values that match the given wildcard string.
Identities consist of a trusted application pool FQDN followed by a slash (/) followed by the trusted application ID.
The Filter value will match any part of the Identity, both the FQDN and the application ID.

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

### -ApplicationId
The name of the application.
This can include the application ID prefix, but doesn't need to.
For example, ApplicationId values of urn:application:tapp1 and tapp1 will both return the same application.
If you supply a value for ApplicationId, you cannot supply a value for the Identity, but you must supply a value for the TrustedApplicationPoolFqdn parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedApplicationPoolFqdn
The FQDN of the trusted application pool on which the application will reside.
If you supply a value for TrustedApplicationPoolFqdn, you cannot supply a value for the Identity, but you must supply a value for the ApplicationID parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
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

### Microsoft.Rtc.Management.Xds.DisplayTrustedApplication


## NOTES


## RELATED LINKS

[New-CsTrustedApplication](New-CsTrustedApplication.md)

[Remove-CsTrustedApplication](Remove-CsTrustedApplication.md)

[Set-CsTrustedApplication](Set-CsTrustedApplication.md)

