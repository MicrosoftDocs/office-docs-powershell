---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsTrustedApplicationComputer

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves information about one or more computers that host trusted applications.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010

It is recommended that the computers that are running trusted applications within a Microsoft Lync Server 2010 deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
Use this cmdlet to retrieve the Identity (FQDN) and the pool on which it is located of one of more computers that contain trusted applications.

You can use this cmdlet to retrieve computers based on the computer FQDN or to retrieve all the computers that are part of a specified pool.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTrustedApplicationComputer cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsTrustedApplicationComputer"}

**Below Content Applies To:** Lync Server 2013

We recommend that the computers that are running trusted applications within a Lync Server deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
Use this cmdlet to retrieve the Identity (FQDN) and the pool on which it is located of one of more computers that contain trusted applications.

You can use this cmdlet to retrieve computers based on the computer FQDN or to retrieve all the computers that are part of a specified pool.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTrustedApplicationComputer cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsTrustedApplicationComputer"}

**Below Content Applies To:** Skype for Business Server 2015

We recommend that the computers that are running trusted applications within a Skype for Business Server 2015 deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
Use this cmdlet to retrieve the Identity (FQDN) and the pool on which it is located of one of more computers that contain trusted applications.

You can use this cmdlet to retrieve computers based on the computer FQDN or to retrieve all the computers that are part of a specified pool.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationComputer
```

Example 1 retrieves all computers that have been assigned to any trusted application pool within the Lync Server 2010 deployment.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 retrieves all computers that have been assigned to any trusted application pool within the Lync Server deployment.

Get-CsTrustedApplicationComputer

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 retrieves all computers that have been assigned to any trusted application pool within the Skype for Business Server 2015 deployment.

Get-CsTrustedApplicationComputer

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationComputer -Identity Trust1.litwareinc.com
```

Example 2 retrieves information about the computer with the FQDN Trust1.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 retrieves information about the computer with the FQDN Trust1.litwareinc.com.

Get-CsTrustedApplicationComputer -Identity Trust1.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 retrieves information about the computer with the FQDN Trust1.litwareinc.com.

Get-CsTrustedApplicationComputer -Identity Trust1.litwareinc.com

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationComputer -Filter Trust*
```

This example uses the Filter parameter to do a wildcard search for all computers that have an FQDN beginning with the string Trust that have been assigned to trusted application pools.
The Filter parameter searches the Identity property of all trusted application computers.
The wildcard character (*) at the end of the string means that the Filter should look for identities that begin with the string Trust followed by any other characters.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example uses the Filter parameter to do a wildcard search for all computers that have an FQDN beginning with the string Trust that have been assigned to trusted application pools.
The Filter parameter searches the Identity property of all trusted application computers.
The wildcard character (*) at the end of the string means that the Filter should look for identities that begin with the string Trust followed by any other characters.

Get-CsTrustedApplicationComputer -Filter Trust*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example uses the Filter parameter to do a wildcard search for all computers that have an FQDN beginning with the string Trust that have been assigned to trusted application pools.
The Filter parameter searches the Identity property of all trusted application computers.
The wildcard character (*) at the end of the string means that the Filter should look for identities that begin with the string Trust followed by any other characters.

Get-CsTrustedApplicationComputer -Filter Trust*

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationComputer -Pool TrustPool.litwareinc.com
```

Example 4 retrieves a list of all computers that have been assigned to the trusted application pool TrustPool.litwareinc.com.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 retrieves a list of all computers that have been assigned to the trusted application pool TrustPool.litwareinc.com.

Get-CsTrustedApplicationComputer -Pool TrustPool.litwareinc.com

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 retrieves a list of all computers that have been assigned to the trusted application pool TrustPool.litwareinc.com.

Get-CsTrustedApplicationComputer -Pool TrustPool.litwareinc.com

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationComputer | Where-Object {$_.Pool -like "*.litwareinc.com"}
```

In Example 3 we used the Filter parameter to do a wildcard search based on Identity (the FQDN of the computer).
In this example, we're again doing a wildcard search, but this time on the Pool rather than the Identity.
We first call Get-CsTrustedApplicationComputer to retrieve a collection of all the trusted application computers.
We then pipe that collection to the Where-Object cmdlet.
Where-Object enables us to narrow down the collection that has been piped to it.
In this case we want to keep only the trusted application computers that are in any pool on the litwareinc.com domain.
To do this we check the Pool property of each item in the collection ($_.Pool) and see if it matches (-like) the wildcard string *.litwareinc.com.
A value will match that string if it begins with any set of characters and ends with the string .litwareinc.com.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 3 we used the Filter parameter to do a wildcard search based on Identity (the FQDN of the computer).
In this example, we're again doing a wildcard search, but this time on the pool rather than the identity.
We first call Get-CsTrustedApplicationComputer to retrieve a collection of all the trusted application computers.
We then pipe that collection to the Where-Object cmdlet.
Where-Object enables us to narrow down the collection that has been piped to it.
In this case we want to keep only the trusted application computers that are in any pool on the litwareinc.com domain.
To do this we check the Pool property of each item in the collection ($_.Pool) and see if it matches (-like) the wildcard string *.litwareinc.com.
A value will match that string if it begins with any set of characters and ends with the string .litwareinc.com.

Get-CsTrustedApplicationComputer | Where-Object {$_.Pool -like "*.litwareinc.com"}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3 we used the Filter parameter to do a wildcard search based on Identity (the FQDN of the computer).
In this example, we're again doing a wildcard search, but this time on the pool rather than the identity.
We first call the Get-CsTrustedApplicationComputer cmdlet to retrieve a collection of all the trusted application computers.
We then pipe that collection to the Where-Object cmdlet.
The Where-Object cmdlet enables us to narrow down the collection that has been piped to it.
In this case we want to keep only the trusted application computers that are in any pool on the litwareinc.com domain.
To do this we check the Pool property of each item in the collection ($_.Pool) and see if it matches (-like) the wildcard string *.litwareinc.com.
A value will match that string if it begins with any set of characters and ends with the string .litwareinc.com.

Get-CsTrustedApplicationComputer | Where-Object {$_.Pool -like "*.litwareinc.com"}

## PARAMETERS

### -Identity
The fully qualified domain name (FQDN) of the computer you want to retrieve.

```yaml
Type: XdsGlobalRelativeIdentity
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
A string that includes wildcards that enables you to retrieve trusted computers based on Identity values that match the given wildcard string.

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

### -Pool
The FQDN of the trusted application pool for which you want to retrieve computer information.

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

### -Local
When present, returns information only for the local computer.

```yaml
Type: SwitchParameter
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

## OUTPUTS

###  
Retrieves one or more objects of type Microsoft.Rtc.Management.Xds.DisplayComputer.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/360796d8-48c7-4ce2-9bb4-1f8967562f24(OCS.14).aspx)

[New-CsTrustedApplicationComputer]()

[Remove-CsTrustedApplicationComputer]()

[Online Version](http://technet.microsoft.com/EN-US/library/360796d8-48c7-4ce2-9bb4-1f8967562f24(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/360796d8-48c7-4ce2-9bb4-1f8967562f24(OCS.16).aspx)

