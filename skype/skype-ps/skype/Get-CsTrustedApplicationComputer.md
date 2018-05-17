---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsTrustedApplicationComputer
schema: 2.0.0
---

# Get-CsTrustedApplicationComputer

## SYNOPSIS
Retrieves information about one or more computers that host trusted applications.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsTrustedApplicationComputer [[-Identity] <XdsGlobalRelativeIdentity>] [-Pool <String>] [-Local]
 [<CommonParameters>]
```

### Filter
```
Get-CsTrustedApplicationComputer [-Filter <String>] [-Pool <String>] [-Local] [<CommonParameters>]
```

## DESCRIPTION
We recommend that the computers that are running trusted applications within a Skype for Business Server deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
Use this cmdlet to retrieve the Identity (FQDN) and the pool on which it is located of one of more computers that contain trusted applications.

You can use this cmdlet to retrieve computers based on the computer FQDN or to retrieve all the computers that are part of a specified pool.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTrustedApplicationComputer
```

Example 1 retrieves all computers that have been assigned to any trusted application pool within the Skype for Business Server deployment.

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```
Get-CsTrustedApplicationComputer -Identity Trust1.litwareinc.com
```

Example 2 retrieves information about the computer with the FQDN Trust1.litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Get-CsTrustedApplicationComputer -Filter Trust*
```

This example uses the Filter parameter to do a wildcard search for all computers that have an FQDN beginning with the string Trust that have been assigned to trusted application pools.
The Filter parameter searches the Identity property of all trusted application computers.
The wildcard character (*) at the end of the string means that the Filter should look for identities that begin with the string Trust followed by any other characters.

### -------------------------- Example 4 --------------------------
```
Get-CsTrustedApplicationComputer -Pool TrustPool.litwareinc.com
```

Example 4 retrieves a list of all computers that have been assigned to the trusted application pool TrustPool.litwareinc.com.

### -------------------------- Example 5 --------------------------
```
Get-CsTrustedApplicationComputer | Where-Object {$_.Pool -like "*.litwareinc.com"}
```

In Example 3 we used the Filter parameter to do a wildcard search based on Identity (the FQDN of the computer).
In this example, we're again doing a wildcard search, but this time on the pool rather than the identity.
We first call the Get-CsTrustedApplicationComputer cmdlet to retrieve a collection of all the trusted application computers.
We then pipe that collection to the Where-Object cmdlet.
The Where-Object cmdlet enables us to narrow down the collection that has been piped to it.
In this case we want to keep only the trusted application computers that are in any pool on the litwareinc.com domain.
To do this we check the Pool property of each item in the collection ($_.Pool) and see if it matches (-like) the wildcard string *.litwareinc.com.
A value will match that string if it begins with any set of characters and ends with the string .litwareinc.com.


## PARAMETERS

### -Identity
The fully qualified domain name (FQDN) of the computer you want to retrieve.

```yaml
Type: XdsGlobalRelativeIdentity
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
A string that includes wildcards that enables you to retrieve trusted computers based on Identity values that match the given wildcard string.

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

### -Pool
The FQDN of the trusted application pool for which you want to retrieve computer information.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Local
When present, returns information only for the local computer.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.Xds.DisplayComputer


## NOTES


## RELATED LINKS

[New-CsTrustedApplicationComputer](New-CsTrustedApplicationComputer.md)

[Remove-CsTrustedApplicationComputer](Remove-CsTrustedApplicationComputer.md)

