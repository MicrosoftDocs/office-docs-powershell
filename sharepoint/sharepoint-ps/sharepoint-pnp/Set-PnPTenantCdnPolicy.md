---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Set-PnPTenantCdnPolicy

## SYNOPSIS
Sets the CDN Policies for the specified CDN (Public | Private).

## SYNTAX 

```powershell
Set-PnPTenantCdnPolicy -CdnType <SPOTenantCdnType>
                       -PolicyType <SPOTenantCdnPolicyType>
                       -PolicyValue <String>
                       [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Sets the CDN Policies for the specified CDN (Public | Private).

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPTenantCdnPolicy -CdnType Public -PolicyType IncludeFileExtensions -PolicyValue "CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF"
```

This example sets the IncludeFileExtensions policy to the specified value.

## PARAMETERS

### -CdnType
The type of cdn to retrieve the policies from

```yaml
Type: SPOTenantCdnType
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -PolicyType
The type of the policy to set

```yaml
Type: SPOTenantCdnPolicyType
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -PolicyValue
The value of the policy to set

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)