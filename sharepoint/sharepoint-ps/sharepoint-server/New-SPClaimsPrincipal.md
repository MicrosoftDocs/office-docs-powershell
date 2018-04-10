---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: New-SPClaimsPrincipal
schema: 2.0.0
---

# New-SPClaimsPrincipal

## SYNOPSIS

Creates a claims principal.



## SYNTAX

### STSIdentity
```
New-SPClaimsPrincipal [-ClaimValue] <String> [[-ClaimType] <String>]
 [-TrustedIdentityTokenIssuer] <SPTrustedIdentityTokenIssuerPipeBind> [-IdentifierClaim]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### ClaimProvider
```
New-SPClaimsPrincipal [-ClaimValue] <String> [-ClaimType] <String>
 [-AssignmentCollection <SPAssignmentCollection>] -ClaimProvider <SPClaimProvider> [<CommonParameters>]
```

### BasicClaim
```
New-SPClaimsPrincipal [-EncodedClaim] <String> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

### IdentityType
```
New-SPClaimsPrincipal [-Identity] <String> [-IdentityType] <SPIdentifierTypes>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### TrustIdentity
```
New-SPClaimsPrincipal [-Identity] <String> [-TrustedIdentityTokenIssuer] <SPTrustedIdentityTokenIssuerPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The New-SPClaimsPrincipal cmdlet creates a claims principal.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------------EXAMPLE 1----------------------------- 
```
PS C:\>New-SPSite http://sitename/sites/newsite -owner (New-SPClaimsPrincipal contoso\johndoe -TrustedIdentityTokenIssuer "NTLM")
```

This example creates a claim principal for a Windows user.

### -------------------------EXAMPLE 2----------------------------- 
```
PS C:\>New-SPSite http://localhost/sites/newsite -owner (New-SPClaimsPrincipal contoso\allusers -TrustedIdentityTokenIssuer "NTLM")
```

This example creates a claim principal for a Windows group.

### -------------------------EXAMPLE 3----------------------------- 
```
PS C:\>New-SPSite http://sitename/sites/newsite -owner (New-SPClaimsPrincipal -ClaimValue "john@contoso.com" -ClaimType Email -TrustedIdentityTokenIssuer "LiveID STS" -IdentifierClaim Yes)
```

This example creates a claim principal for a trusted identity token issuer claim.

### -------------------------EXAMPLE 4----------------------------- 
```
PS C:\>$ip = New-SPIdentityProvider -ASPNetMembershipProvider "myMembershipProvider" -ASPNetRoleProvider "myRoleProvider"
PS C:\>New-SPSite http://sitename/sites/newsite -owner (New-SPClaimsPrincipal "john@contoso.com" -TrustedIdentityTokenIssuer $ip)
```

This example creates a claim principal for a ASPNet Membership User.

### -------------------------EXAMPLE 5----------------------------- 
```
PS C:\>New-SPSite http://sitename/sites/newsite -owner (New-SPClaimsPrincipal "Sales Manager Role" -IdentityProvider "myRoleProvider")
```

This example creates a claim principal for a ASPNet Role.

### -------------------------EXAMPLE 6----------------------------- 
```
PS C:\>$cp = New-SPClaimsPrincipal -Identity "redmond\SiteOwner" -IdentityType 1
PS C:\>New-SPSite http://servername:port -OwnerAlias $cp.ToEncodedString() -Template "STS#0"
```

This example creates a claim principal for a Basic Claim Role, which is also called an encoded claim).

## PARAMETERS

### -ClaimValue
Specifies the claim value of the claims object.
The claims value specifies the user, group, or computer that the claim is authenticating.

The type must be a valid claim value; for example, john@contoso.com.

```yaml
Type: String
Parameter Sets: STSIdentity, ClaimProvider
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -EncodedClaim
Converts a simple claim to a full encoded claim.

The type must be a valid claim value; for example, i:001w|redmond\user.

```yaml
Type: String
Parameter Sets: BasicClaim
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Identity
Specifies the name of the new claims principal.

The type must be a valid name of a claims principal.

```yaml
Type: String
Parameter Sets: IdentityType, TrustIdentity
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ClaimType
Specifies the type of claim to create.
The value I indicates a unique user identity claim, and the value C indicates all other claims.

The type must be either of the following values: I or C.

```yaml
Type: String
Parameter Sets: STSIdentity
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: ClaimProvider
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedIdentityTokenIssuer
Specifies the ID of the authentication provider.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of an Authentication provider (for example, MyAuthprovider1); or an instance of a valid SPTrustedIdentityTokenIssuer object.

```yaml
Type: SPTrustedIdentityTokenIssuerPipeBind
Parameter Sets: STSIdentity, TrustIdentity
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IdentityType
Specifies the type of the new claims principal.

The type must be one of the following: WindowsSamAccountName, WindowsSecurityGroupSid, FormsUser, FormsRole, or EncodedClaim.

```yaml
Type: SPIdentifierTypes
Parameter Sets: IdentityType
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IdentifierClaim
Specifies if the new claim is an identity claim.

```yaml
Type: SwitchParameter
Parameter Sets: STSIdentity
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ClaimProvider
Specifies the security token service identity provider that will contain the claims principal.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of identity provider (for example, MyIDprovider1); or an instance of a valid SPIdentityProvider object.

```yaml
Type: SPClaimProvider
Parameter Sets: ClaimProvider
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

