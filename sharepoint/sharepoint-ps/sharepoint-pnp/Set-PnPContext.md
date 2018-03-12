---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPContext

## SYNOPSIS
Set the ClientContext

## SYNTAX 

```powershell
Set-PnPContext -Context <ClientContext>
```

## DESCRIPTION
Sets the Client Context to use by the cmdlets, which allows easy context switching. See examples for details.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Connect-PnPOnline -Url $siteAurl -Credentials $credentials
$ctx = Get-PnPContext
Get-PnPList # returns the lists from site specified with $siteAurl
Connect-PnPOnline -Url $siteBurl -Credentials $credentials
Get-PnPList # returns the lists from the site specified with $siteBurl
Set-PnPContext -Context $ctx # switch back to site A
Get-PnPList # returns the lists from site A
```



## PARAMETERS

### -Context
The ClientContext to set

```yaml
Type: ClientContext
Parameter Sets: (All)

Required: True
Position: 1
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)